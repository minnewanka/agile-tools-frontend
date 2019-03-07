import React, { Component } from 'react'
import { getRooms, deleteRoom } from '../../services/roomService'
import { Row, Col, Card } from 'react-materialize'
import { withRouter } from "react-router"
import './roomList.scss'

export class RoomList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    }
  }

  componentDidMount() {
    getRooms().then((results) => { this.setState({ rooms: results }) })
  }
  redirect = (roomCode) => {
    this.props.history.push({ pathname: "/dashboard", state: { roomCode: roomCode } })
  }
  removeRoom(roomCodeToDelete) {
    deleteRoom(roomCodeToDelete).then(() => {
      const newArray = this.state.rooms.filter(room => room.code !== roomCodeToDelete)
      this.setState({ rooms: newArray })
    })
  }

  render() {
    return (
      //TODO externaliser css en commun
      <div className="room-list-container">

        {this.state.rooms.map((room, index) => (

          <Card className=" room-card-title" key={index} textClassName='black-text' title={room.name}
            actions={[
              <button key="connect" className="button-linkstyle link-connect" onClick={() => this.redirect(room.code)}>Connect</button>,
              <button key="delete" className="button-linkstyle link-delete" onClick={() => this.removeRoom(room.code)}>Delete</button>
            ]}>
            Room# {room.code}
          </Card>

        ))}

      </div>
    )
  }
}

export default withRouter(RoomList)