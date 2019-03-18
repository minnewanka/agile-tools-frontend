import React, { Component } from "react"
import { Row, Col, Card } from "react-materialize"
import "./roomList.scss"

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
            <Col m={4} s={10} l={2} key={index}>
              <Card
                className="small room-card"
                key={index}
                textClassName="black-text"
                title={room.name}
                actions={[
                  <button
                    type="button"
                    key="connect"
                    className="button-link link-connect"
                    onClick={() => this.redirect(room.code)}
                  >
                    {translate("connect")}
                  </button>,
                  <button
                    type="button"
                    key="delete"
                    className="button-link link-delete"
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
