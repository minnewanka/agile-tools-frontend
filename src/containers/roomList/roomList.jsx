import React, { Component } from "react"
import { Row, Col, Card } from "react-materialize"
import "./roomList.scss"
import { deleteRoom } from "../../services/roomService"

class RoomList extends Component {
  componentDidMount() {
    const { loadRooms } = this.props
    loadRooms()
  }

  redirect = roomCode => {
    const { history } = this.props
    history.push({ pathname: "/room", state: { roomCode } })
  }

  render() {
    const { rooms, removeRoom, translate } = this.props
    return (
      // TODO externaliser css en commun
      <div className="room-list-container">
        <Row>
          {rooms.map((room, index) => (
            <Col m={2} s={2} key={index}>
              <Card
                className="room-card"
                key={index}
                textClassName="black-text"
                title={room.name}
                actions={[
                  <button
                    type="button"
                    key="connect"
                    className="button-linkstyle link-connect"
                    onClick={() => this.redirect(room.code)}
                  >
                    {translate("connect")}
                  </button>,
                  <button
                    type="button"
                    key="delete"
                    className="button-linkstyle link-delete"
                    onClick={() => removeRoom(room.code)}
                  >
                    {translate("delete")}
                  </button>
                ]}
              >
                Room# {room.code}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
export default RoomList
