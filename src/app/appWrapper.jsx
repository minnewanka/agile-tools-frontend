import React, { Component } from "react"
import Parse from "parse"
import App from "./app"
import allMessages from "../common/utils/IntlUtils"
import { Provider } from "../context/index"
import { getRoom, getRooms, deleteRoom } from "../services/roomService"
import { getVotes } from "../services/voteService"

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
        participants: []
      },
      changeLang: this.changeLang.bind(this),
      formatMessage: this.formatMessage.bind(this),
      loadRooms: this.loadRooms.bind(this),
      removeRoom: this.removeRoom.bind(this),
      setCurrentRoom: this.setCurrentRoom.bind(this)
    }
  }

  setCurrentRoom(roomCode) {
    getRoom(roomCode).then(room => {
      getVotes(room.get("code")).then(results => {
        this.setState({
          currentRoom: {
            roomCode: room.get("code"),
            roomName: room.get("name"),
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

  initLiveQuery(roomCode) {
    const {
      currentRoom: { participants }
    } = this.state
    const query = new Parse.Query("Vote")
    query.equalTo("roomCode", roomCode)
    const subscription = query.subscribe()

    subscription.on("create", object => {
      const username = object.get("username")
      const newParticipant = { username }
      participants.push(newParticipant)
      this.setState({ participants })
    })
    subscription.on("update", object => {
      const participantToUpdate = {
        username: object.get("username"),
        pokerVote: object.get("pokerplanning"),
        tshirtVote: object.get("tshirt")
      }
      const foundIndex = participants.findIndex(
        x => x.username === object.get("username")
      )
      participants[foundIndex] = participantToUpdate
      this.setState({ participants })
    })

    subscription.on("delete", object => {
      const newParticipants = participants.filter(
        participant => participant.username !== object.get("username")
      )
      this.setState({ participants: newParticipants })
    })
  }

  changeLang() {
    this.setState(({ locale }) => {
      const newLocale = locale === "fr" ? "en" : "fr"
      return { locale: newLocale }
    })
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
