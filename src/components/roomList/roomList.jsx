import React, { Component } from "react"
import { Row, Col, Card } from "react-materialize"
import { withRouter } from "react-router-dom"
import "./roomList.scss"
import { getRooms, deleteRoom } from "../../services/roomService"
import { Consumer } from "../../context"

class RoomList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    }
  }

  componentDidMount() {
    getRooms().then(results => {
      this.setState({ rooms: results })
    })
  }

  redirect = roomCode => {
    const { history } = this.props
    history.push({ pathname: "/dashboard", state: { roomCode } })
  }

  removeRoom(roomCodeToDelete) {
    const { rooms } = this.state
    deleteRoom(roomCodeToDelete).then(() => {
      const newArray = rooms.filter(room => room.code !== roomCodeToDelete)
      this.setState({ rooms: newArray })
    })
  }

  render() {
    const { rooms } = this.state
    const { translate } = this.props
    return (
      // TODO externaliser css en commun
      <div className="room-list-container">
        <Row>
          {rooms.map((room, index) => (
            <Col m={2} s={2}>
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
                    onClick={() => this.removeRoom(room.code)}
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
