import React, { Component } from 'react'
import './dashboard.scss'
import RoomInfo from './roomInfo'
import PokerPlanning from '../pokerPlanning/pokerPlanning'
import TshirtCeremony from '../tshirtCeremony/tshirtCeremony'
import Parse from 'parse'
import { getRoom } from '../../services/roomService'
import { deleteVote } from '../../services/voteService'
import { Row, Col, Input } from 'react-materialize'
import { getVotes } from '../../services/voteService'


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
    let query = new Parse.Query('Vote')
    query.equalTo("roomCode", roomCode)
    let subscription = query.subscribe()

    subscription.on('create', (object) => {
      const { participants } = this.state
      const username = object.get("username")
      const newParticipant = { username: username }
      participants.push(newParticipant)
      this.setState({ participants: participants })
      window.Materialize.toast(username + ' is connected', 3000)
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
      window.Materialize.toast(username + ' is now deconnected', 3000)
    })
    

  }
  handledeleteParticipants(username) {
    deleteVote(username)
  }

  handleTypeRoom(evt) {
    this.setState({ ceremony: evt.target.value })
  }

  render() {
    let labelParticipants
    let ceremonie
    if (this.state.participants.length > 0) {
      labelParticipants = <Col>Participants</Col>
    }
    if (this.state.ceremony === "pokerplanning") {
      ceremonie = <PokerPlanning participants={this.state.participants} />
    } else {
      ceremonie = <TshirtCeremony participants={this.state.participants}/>
    }

    return (
      <div className="dashboard-container">
        <RoomInfo roomName={this.state.roomName} roomCode={this.state.roomCode} />
        <Row className="participants-list">
          {/* {labelParticipants} */}
          <Col s={10} l={10}>
            {
              this.state.participants.map((participant, index) => (
                <div key={index} className="chips-participants">{participant.username}<span className="deleteIcon" onClick={()=>(this.handledeleteParticipants(participant.username))}>&times;</span></div>
              ))
            }
          </Col>
          <Col s={10} l={2}>
            <Input type='select' label="Ceremonie" defaultValue={this.state.ceremony} onChange={this.handleTypeRoom}>
              <option value='pokerplanning'>Poker Planning</option>
              <option value='tshirt'>T Shirt</option>
            </Input>
          </Col>
        </Row>
        {}
        {ceremonie}

      </div>
    )
  }
}



export default Dashboard
