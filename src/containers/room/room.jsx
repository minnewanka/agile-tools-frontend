import React, { Component } from "react"
import "./room.scss"
import { Row, Col, Button } from "react-materialize"
import PokerPlanning from "./components/pokerPlanning"
import TshirtCeremony from "./components/tshirtCeremony"
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
      currentRoom: { participants, roomCode, ceremony },
      translate,
      resetVote,
      location: { state }
    } = this.props
    const currentParticipants =
      state && roomCode === state.roomCode && participants ? participants : []

    return (
      <div className="room-container row ">
        <Col className="room-container-col" l={9} m={8} s={12}>
          {ceremony === "pokerplanning" ? (
            <PokerPlanning participants={currentParticipants} />
          ) : (
            <TshirtCeremony participants={currentParticipants} />
          )}
        </Col>
        <Col className="room-container-col" l={3} m={4} s={12}>
          <Row>
            <SideBar
              ceremony={ceremony}
              handleTypeRoom={this.handleTypeRoom}
              translate={translate}
              participants={currentParticipants}
              className="col"
            />
          </Row>
          <Row>
            <div className="btn-room-container col">
              <Button
                className="btn-room-reset"
                waves="light"
                onClick={resetVote}
              >
                {translate("buttonReset")}
              </Button>
              <DeleteRoomModal roomCode={roomCode} />
            </div>
          </Row>
        </Col>
      </div>
    )
  }
}

export default Room
