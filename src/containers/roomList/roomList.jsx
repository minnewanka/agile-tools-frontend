import React, { Component } from "react"
import { Row, Col } from "react-materialize"
import "./roomList.scss"

class RoomList extends Component {
  constructor(props) {
    super(props)
    const { loadRooms } = this.props
    loadRooms()
  }

  redirect = roomCode => {
    const { history } = this.props
    history.push({ pathname: "/room", state: { roomCode } })
  }

  render() {
    const { rooms, removeRoom } = this.props
    const closeRoom = (event, roomCode) => {
      event.stopPropagation()
      removeRoom(roomCode)
    }
    return (
      <div className="room-list-container">
        <Row>
          {rooms.map(room => (
            <Col key={room.code}>
              <div
                className="room-card"
                onClick={() => this.redirect(room.code)}
                role="button"
              >
                <button
                  className="btn-round close"
                  type="button"
                  onClick={event => closeRoom(event, room.code)}
                >
                  <i className="small material-icons">delete_forever</i>
                </button>
                <h3 className="room-name">{room.name}</h3>
                <div className="room-infos">
                  <p>Room# {room.code}</p>
                  <p>{room.nbParticipants} participant(s)</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
export default RoomList
