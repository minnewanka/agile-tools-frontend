import React, { Component } from "react"
import "./dashboard.scss"
import Parse from "parse"
import {
  Row,
  Col,
  Input,
  Collection,
  CollectionItem,
  Icon
} from "react-materialize"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import RoomInfo from "./roomInfo"
import PokerPlanning from "../pokerPlanning/pokerPlanning"
import TshirtCeremony from "../tshirtCeremony/tshirtCeremony"
import { getRoom } from "../../services/roomService"
import { deleteVote, getVotes } from "../../services/voteService"
import DeleteRoomModal from "./deleteRoomModal"
import Footer from "../footer/footer"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: "",
      roomCode: "",
      participants: [],
      ceremony: "pokerplanning"
    }
    this.initLiveQuery = this.initLiveQuery.bind(this)
    this.handleTypeRoom = this.handleTypeRoom.bind(this)
  }

  componentDidMount() {
    const {
      location: { state: locationState }
    } = this.props
    if (locationState) {
      const { roomCode } = locationState
      getRoom(roomCode).then(room => {
        this.setState({
          roomCode: room.get("code"),
          roomName: room.get("name")
        })
        this.initLiveQuery(room.get("code"))
        getVotes(roomCode).then(results => {
          this.setState({ participants: results })
        })
      })
    }
  }

  initLiveQuery(roomCode) {
    const query = new Parse.Query("Vote")
    query.equalTo("roomCode", roomCode)
    const subscription = query.subscribe()

    subscription.on("create", object => {
      const { participants } = this.state
      const username = object.get("username")
      const newParticipant = { username }
      participants.push(newParticipant)
      this.setState({ participants })
    })
    subscription.on("update", object => {
      const { participants } = this.state
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
      const { participants } = this.state
      const newParticipants = participants.filter(
        participant => participant.username !== object.get("username")
      )
      this.setState({ participants: newParticipants })
    })
  }

  handleTypeRoom(evt) {
    this.setState({ ceremony: evt.target.value })
  }

  render() {
    const { ceremony, participants, roomName, roomCode } = this.state
    const { translate } = this.props
    let ceremonyComponent
    if (ceremony === "pokerplanning") {
      ceremonyComponent = <PokerPlanning participants={participants} />
    } else {
      ceremonyComponent = <TshirtCeremony participants={participants} />
    }
    return [
      <div className="dashboard-container">
        <RoomInfo roomName={roomName} roomCode={roomCode} />
        <div>
          <Row>
            <Col s={10} l={10}>
              {ceremonyComponent}
            </Col>
            <Col s={10} l={2}>
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
                  <li className="collection-header">
                    <h5 className="participants-list-header center-align">
                      {translate("participants")}
                    </h5>
                  </li>
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

                <div className="btn-delete-room">
                  <DeleteRoomModal roomCode={roomCode} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>,
      <Footer />
    ]
  }
}

export default Dashboard
