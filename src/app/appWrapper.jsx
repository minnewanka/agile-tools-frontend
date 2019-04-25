import React, { Component } from 'react'
import Parse from 'parse'
import App from './app'
import allMessages from '../common/utils/IntlUtils'
import { Provider } from '../context/index'
import { getRoom, getRooms, deleteRoom } from '../services/roomService'
import { getVotes, resetAllVotes } from '../services/voteService'
import { getDefaultLanguage, saveLanguage } from '../common/utils'

class AppWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: getDefaultLanguage(),
      messages: allMessages,
      roomEntranceFormType: 'create',
      rooms: [],
      currentRoom: {
        roomCode: '',
        roomName: '',
        ceremony: 'pokerplanning',
        participants: [],
        isFlipped: true,
        toggleFlipped: this.toggleFlipped.bind(this)
      },
      toggleRoomEntranceFormType: this.toggleRoomEntranceFormType.bind(this),
      changeLang: this.changeLang.bind(this),
      formatMessage: this.formatMessage.bind(this),
      loadRooms: this.loadRooms.bind(this),
      removeRoom: this.removeRoom.bind(this),
      setCurrentRoom: this.setCurrentRoom.bind(this),
      changeCeremony: this.changeCeremony.bind(this),
      resetVote: this.resetVote.bind(this),
      subscriptionOnCreate: this.subscriptionOnCreate.bind(this),
      subscriptionOnUpdate: this.subscriptionOnUpdate.bind(this),
      subscriptionOnDelete: this.subscriptionOnDelete.bind(this)
    }
  }

  setCurrentRoom(roomCode) {
    if (!roomCode) return
    getRoom(roomCode).then(room => {
      getVotes(room.get('code')).then(results => {
        const { currentRoom } = this.state
        this.setState({
          currentRoom: {
            ...currentRoom,
            roomCode: room.get('code'),
            roomName: room.get('name'),
            ceremony: 'pokerplanning',
            isFlipped: true,
            participants: results
          }
        })
      })
      this.initLiveQuery(room.get('code'))
    })
  }

  formatMessage = (prefix = '') => key => {
    const { messages, locale } = this.state
    return messages[locale][`${prefix}.${key}`]
      ? messages[locale][`${prefix}.${key}`]
      : messages[locale][`global.${key}`]
  }

  toggleRoomEntranceFormType() {
    const { roomEntranceFormType } = this.state
    this.setState({
      roomEntranceFormType: roomEntranceFormType === 'create' ? 'get' : 'create'
    })
  }

  resetVote() {
    const {
      currentRoom,
      currentRoom: { roomCode, ceremony }
    } = this.state
    resetAllVotes(roomCode, ceremony)
    this.setState({
      currentRoom: { ...currentRoom, isFlipped: true }
    })
  }

  initLiveQuery(pRoomCode) {
    const query = new Parse.Query('Vote')
    query.equalTo('roomCode', pRoomCode)
    const subscription = query.subscribe()
    this.subscriptionOnCreate(subscription)
    this.subscriptionOnUpdate(subscription)
    this.subscriptionOnDelete(subscription)
  }

  subscriptionOnCreate(subscription) {
    subscription.on('create', object => {
      const {
        currentRoom,
        currentRoom: { participants }
      } = this.state
      const username = object.get('username')
      this.setState({
        currentRoom: {
          ...currentRoom,
          participants: [...participants, { username }]
        }
      })
    })
  }

  subscriptionOnUpdate(subscription) {
    subscription.on('update', object => {
      const {
        currentRoom,
        currentRoom: { participants }
      } = this.state
      const participantToUpdate = {
        username: object.get('username'),
        pokerplanning: object.get('pokerplanning'),
        tshirt: object.get('tshirt'),
        trafficlight: object.get('trafficlight')
      }
      const foundIndex = participants.findIndex(
        x => x.username === object.get('username')
      )
      participants[foundIndex] = participantToUpdate

      this.setState({
        currentRoom: { ...currentRoom, participants }
      })
    })
  }

  subscriptionOnDelete(subscription) {
    subscription.on('delete', object => {
      const {
        currentRoom,
        currentRoom: { participants }
      } = this.state
      const newParticipants = participants.filter(
        participant => participant.username !== object.get('username')
      )
      this.setState({
        currentRoom: { ...currentRoom, participants: newParticipants }
      })
    })
  }

  changeLang() {
    this.setState(({ locale }) => {
      const newLocale = locale === 'fr' ? 'en' : 'fr'
      saveLanguage(newLocale)
      return { locale: newLocale }
    })
  }

  changeCeremony(ceremony) {
    const { currentRoom } = this.state
    this.setState({
      currentRoom: { ...currentRoom, ceremony, isFlipped: true }
    })
  }

  async loadRooms() {
    const results = await getRooms()
    const promises = results.map(async result => {
      const resulti = result
      const votes = await getVotes(result.code)
      resulti.nbParticipants = votes.length
    })
    await Promise.all(promises)
    this.setState({ rooms: results })
  }

  removeRoom(roomCode) {
    const { rooms } = this.state
    deleteRoom(roomCode).then(() => {
      const newArray = rooms.filter(room => room.code !== roomCode)
      this.setState({ rooms: newArray })
    })
  }

  toggleFlipped() {
    const {
      currentRoom,
      currentRoom: { isFlipped }
    } = this.state
    this.setState({
      currentRoom: { ...currentRoom, isFlipped: !isFlipped }
    })
  }

  render() {
    return (
      <Provider value={this.state}>
        <App />
      </Provider>
    )
  }
}

export default AppWrapper
