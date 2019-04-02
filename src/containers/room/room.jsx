import React, { Component } from "react"
import "./room.scss"
import { Row, Col, Button } from "react-materialize"
import Ceremony from "./components/ceremony"
import SideBar from "./components/sideBar"
import DeleteRoomModal from "./components/deleteRoomModal"

class Room extends Component {
  constructor(props) {
    super(props)

    const {
      location: { state },
      setCurrentRoom,
      currentRoom: { roomCode }
    } = props
    if (state && roomCode !== state.roomCode)
      setCurrentRoom(state && state.roomCode)
    this.handleTypeRoom = this.handleTypeRoom.bind(this)
  }

  handleFlip(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  handleTypeRoom(evt) {
    const { changeCeremony } = this.props

    changeCeremony(evt.target.value)
  }

  render() {
    const {
      currentRoom: {
        participants,
        roomCode,
        ceremony,
        isFlipped,
        toggleFlipped
      },
      translate,
      resetVote,
      location: { state }
    } = this.props
    const currentParticipants =
      state && roomCode === state.roomCode && participants ? participants : []

    const isEveryoneVote =
      currentParticipants.length > 0 &&
      (currentParticipants.length ===
        currentParticipants.filter(participant => participant[ceremony])
          .length ||
        !isFlipped)

    return (
      <div className="room-container">
        <Row className="room-container-row">
          <Col className="room-container-col" l={9} m={8} s={12}>
            <Ceremony participants={currentParticipants} />
          </Col>
          <Col className="room-container-col" l={3} m={4} s={12}>
            <Row>
              <SideBar
                ceremony={ceremony}
                handleTypeRoom={this.handleTypeRoom}
                participants={currentParticipants}
                className="col"
              />
            </Row>
          </Col>
        </Row>
        <div className="room-button-row row">
          <div className="edit-btn-container">
            <button
              type="button"
              className="button-default-style btn-room-reveal"
              disabled={!isEveryoneVote}
              waves="light"
              onClick={toggleFlipped}
            >
              {isFlipped ? translate("buttonReveal") : translate("buttonHide")}
            </button>
            <Button
              className="button-default-style btn-room-reset"
              waves="light"
              onClick={resetVote}
            >
              {translate("buttonReset")}
            </Button>
          </div>
          <div className="delete-btn-container">
            <DeleteRoomModal roomCode={roomCode} />
          </div>
        </div>
      </div>
    )
  }
}

export default Room
