import React, { Component } from "react"
import Parse from "parse"
import App from "./app"
import allMessages from "../common/utils/IntlUtils"
import { Provider } from "../context/index"
import { getRoom, getRooms, deleteRoom } from "../services/roomService"
import { getVotes, resetAllVotes } from "../services/voteService"

class AppWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: "en",
      messages: allMessages,
      rooms: [],
      currentRoom: {
        roomCode: "",
        roomName: "",
        ceremony: "pokerplanning",
        participants: []
      },
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
      getVotes(room.get("code")).then(results => {
        this.setState({
          currentRoom: {
            roomCode: room.get("code"),
            roomName: room.get("name"),
            ceremony: "pokerplanning",
            participants: results
          }
        })
      })
      this.initLiveQuery(room.get("code"))
    })
  }

  formatMessage = (prefix = "createRoom") => key => {
    const { messages, locale } = this.state
    return messages[locale][`${prefix}.${key}`]
  }

  resetVote() {
    const {
      currentRoom: { roomCode, ceremony }
    } = this.state
    resetAllVotes(roomCode, ceremony)
  }

  initLiveQuery(pRoomCode) {
    const query = new Parse.Query("Vote")
    query.equalTo("roomCode", pRoomCode)
    const subscription = query.subscribe()
    this.subscriptionOnCreate(subscription)
    this.subscriptionOnUpdate(subscription)
    this.subscriptionOnDelete(subscription)
  }

  subscriptionOnCreate(subscription) {
    subscription.on("create", object => {
      const {
        currentRoom,
        currentRoom: { participants }
      } = this.state
      const username = object.get("username")
      this.setState({
        currentRoom: {
          ...currentRoom,
          participants: [...participants, { username }]
        }
      })
    })
  }

  subscriptionOnUpdate(subscription) {
    console.log("onUpdate")
    subscription.on("update", object => {
      const {
        currentRoom,
        currentRoom: { participants }
      } = this.state
      const participantToUpdate = {
        username: object.get("username"),
        pokerVote: object.get("pokerplanning"),
        tshirtVote: object.get("tshirt")
      }
      const foundIndex = participants.findIndex(
        x => x.username === object.get("username")
      )
      participants[foundIndex] = participantToUpdate
      this.setState({
        currentRoom: { ...currentRoom, participants }
      })
    })
  }

  subscriptionOnDelete(subscription) {
    subscription.on("delete", object => {
      const {
        currentRoom,
        currentRoom: { participants }
      } = this.state
      const newParticipants = participants.filter(
        participant => participant.username !== object.get("username")
      )
      this.setState({
        currentRoom: { ...currentRoom, participants: newParticipants }
      })
    })
  }

  changeLang() {
    this.setState(({ locale }) => {
      const newLocale = locale === "fr" ? "en" : "fr"
      return { locale: newLocale }
    })
  }

  changeCeremony(ceremony) {
    const { currentRoom } = this.state
    this.setState({ currentRoom: { ...currentRoom, ceremony } })
  }

  loadRooms() {
    getRooms().then(results => {
      this.setState({ rooms: results })
    })
  }

  removeRoom(roomCode) {
    const { rooms } = this.state
    deleteRoom(roomCode).then(() => {
      const newArray = rooms.filter(room => room.code !== roomCode)
      this.setState({ rooms: newArray })
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
