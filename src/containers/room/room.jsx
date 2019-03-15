import React, { Component } from "react"
import "./room.scss"
import {
  Row,
  Col,
  Input,
  Collection,
  CollectionItem,
  Button,
  Icon
} from "react-materialize"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import PokerPlanning from "./components/pokerPlanning/pokerPlanning"
import TshirtCeremony from "./components/tshirtCeremony/tshirtCeremony"
import { deleteVote } from "../../services/voteService"
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

  handleTypeRoom(evt) {
    const { changeCeremony } = this.props
    changeCeremony(evt.target.value)
  }

  render() {
    const {
      currentRoom: { participants, roomCode, ceremony },
      translate,
      location: { state }
    } = this.props
    const currentParticipants =
      state && roomCode === state.roomCode && participants ? participants : []

    return (
      <div className="room-container">
        <div className="ceremony-container">
          {ceremony === "pokerplanning" ? (
            <PokerPlanning participants={currentParticipants} />
          ) : (
            <TshirtCeremony participants={currentParticipants} />
          )}
        </div>
        <div className="sideBarContainer">
          <div className="ceremony-dropdown">
            <Input
              type="select"
              label="Ceremonie"
              icon="event_seat"
              defaultValue={ceremony}
              onChange={this.handleTypeRoom}
            >
              <option value="pokerplanning">Poker Planning</option>
              <option value="tshirt">T Shirt</option>
            </Input>
          </div>
          <Collection className="participants-list">
            <h5 className="participants-list-header center-align">
              {translate("participants")}
            </h5>
            <TransitionGroup className="test">
              {currentParticipants.map((participant, index) => (
                <CSSTransition timeout={500} classNames="fade">
                  <CollectionItem className="participant-item" key={index}>
                    <Icon className="account-icon" center>
                      account_circle
                    </Icon>
                    <span className="participant-item-text">
                      {participant.username}
                    </span>
                    <span
                      role="button"
                      className="deleteIcon"
                      onClick={() => deleteVote(participant.username)}
                    >
                      &times;
                    </span>
                  </CollectionItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Collection>
        </div>
        <div className="btn-room">
          <Button className="btn-room-reset" waves="light">
            Reset Vote
          </Button>
          <DeleteRoomModal roomCode={roomCode} />
        </div>
      </div>
    )
  }
}

export default Room
