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
import RoomHeader from "./roomHeader"
import PokerPlanning from "./components/pokerPlanning/pokerPlanning"
import TshirtCeremony from "./components/tshirtCeremony/tshirtCeremony"
import { deleteVote } from "../../services/voteService"
import DeleteRoomModal from "./components/deleteRoomModal"
import Footer from "../../common/components/footer/footer"

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ceremony: "pokerplanning"
    }
    this.handleTypeRoom = this.handleTypeRoom.bind(this)
  }

  componentDidMount() {
    const {
      location: { state: locationState },
      setCurrentRoom
    } = this.props
    if (locationState) {
      const { roomCode } = locationState
      setCurrentRoom(roomCode)
    }
  }

  handleTypeRoom(evt) {
    this.setState({ ceremony: evt.target.value })
  }

  render() {
    const { ceremony } = this.state
    const {
      currentRoom: { participants, roomName, roomCode },
      translate
    } = this.props
    let ceremonyComponent
    if (ceremony === "pokerplanning") {
      ceremonyComponent = <PokerPlanning participants={participants} />
    } else {
      ceremonyComponent = <TshirtCeremony participants={participants} />
    }
    return [
      <div className="room-container">
        <RoomHeader roomName={roomName} roomCode={roomCode} />
        <div>
          <Row>
            <Col s={10} m={8} l={10}>
              {ceremonyComponent}
            </Col>
            <Col s={10} m={4} l={2}>
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
                  <TransitionGroup>
                    {participants.map((participant, index) => (
                      <CSSTransition timeout={500} classNames="fade">
                        <CollectionItem
                          className="participant-item"
                          key={index}
                        >
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
            </Col>
          </Row>
        </div>
      </div>,
      <Footer />
    ]
  }
}

export default Room
