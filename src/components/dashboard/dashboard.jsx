import React, { Component } from 'react'
import './dashboard.scss'
import RoomInfo from './roomInfo'
import PokerPlanning from '../pokerPlanning/pokerPlanning'
import TshirtCeremony from '../tshirtCeremony/tshirtCeremony'
import Parse from 'parse'
import { getRoom } from '../../services/roomService'
import { deleteVote } from '../../services/voteService'
import { Row, Col, Input, Collection, CollectionItem, Icon } from 'react-materialize'
import { getVotes } from '../../services/voteService'
import DeleteRoomModal from './deleteRoomModal'
import Footer from '../footer/footer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { injectIntl, defineMessages } from "react-intl"

const messages = defineMessages({
  participants: {
    id: 'dashboard.participants',
    defaultMessage: 'Participants'
  },
  toastConnected: {
    id: 'dashboard.toastConnected',
    defaultMessage: ' is connected'
  },
  toastDeconnected: {
    id: 'dashboard.toastDeconnected',
    defaultMessage: ' is now deconnected'
  },

})

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
    this.handledeleteParticipants = this.handledeleteParticipants.bind(this)
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { roomCode } = this.props.location.state
      getRoom(roomCode).then((room) => {
        this.setState({ roomCode: room.get("code"), roomName: room.get("name") })
        this.initLiveQuery(room.get("code"))
        getVotes(this.state.roomCode).then((results) => { this.setState({ participants: results }) })
      })
    }

  }

  initLiveQuery(roomCode) {
    const { intl: { formatMessage } } = this.props
    let query = new Parse.Query('Vote')
    query.equalTo("roomCode", roomCode)
    let subscription = query.subscribe()

    subscription.on('create', (object) => {
      const { participants } = this.state
      const username = object.get("username")
      const newParticipant = { username: username }
      participants.push(newParticipant)
      this.setState({ participants: participants })
      window.Materialize.toast(username + formatMessage(messages.toastConnected), 3000)
    })
    subscription.on('update', (object) => {
      const { participants } = this.state
      const participantToUpdate = {
        username: object.get("username"),
        pokerVote: object.get("pokerplanning"),
        tshirtVote: object.get("tshirt")
      }
      var foundIndex = participants.findIndex(x => x.username === object.get("username"))
      participants[foundIndex] = participantToUpdate
      this.setState({ participants: participants })
    })

    subscription.on('delete', (object) => {
      const username = object.get("username")
      const participants = this.state.participants.filter((participant) => (participant.username !== object.get("username")))
      this.setState({ participants: participants })
      window.Materialize.toast(username + formatMessage(messages.toastDeconnected), 3000)
    })


  }
  handledeleteParticipants(username) {
    deleteVote(username)
  }

  handleTypeRoom(evt) {
    this.setState({ ceremony: evt.target.value })
  }

  render() {
    const { intl: { formatMessage } } = this.props
    let ceremonie
    if (this.state.ceremony === "pokerplanning") {
      ceremonie = <PokerPlanning participants={this.state.participants} />
    } else {
      ceremonie = <TshirtCeremony participants={this.state.participants} />
    }

    return (
      [<div className="dashboard-container">
        <RoomInfo roomName={this.state.roomName} roomCode={this.state.roomCode} />
        <div>
          <Row>
            <Col s={10} l={10}>
              {ceremonie}
            </Col>
            <Col s={10} l={2}>
            <div className="sideBarContainer">
              <Input type='select' label="Ceremonie" icon='event_seat' defaultValue={this.state.ceremony} onChange={this.handleTypeRoom}>
                <option value='pokerplanning'>Poker Planning</option>
                <option value='tshirt'>T Shirt</option>
              </Input>

              <Collection className="participants-list">
                <li className="collection-header"><h5 className="participants-list-header center-align">{formatMessage(messages.participants)}</h5></li>
                <TransitionGroup>
                  {
                    this.state.participants.map((participant, index) => (
                      <CSSTransition
                        timeout={500}
                        classNames="fade">
                        <CollectionItem className="participant-item" key={index}>
                          <Icon className="account-icon" center={true}>account_circle</Icon>
                          <span className="participant-item-text">{participant.username}</span>
                          <span className="deleteIcon" onClick={() => (this.handledeleteParticipants(participant.username))}>&times;</span>
                        </CollectionItem>
                      </CSSTransition>
                    ))
                  }
                </TransitionGroup>
              </Collection>

              <div className="btn-delete-room">
                <DeleteRoomModal roomCode={this.state.roomCode} />
              </div>
              </div>
            </Col>

          </Row>
        </div>
      </div>,
      <Footer />]
    )
  }
}

export default injectIntl(Dashboard)
