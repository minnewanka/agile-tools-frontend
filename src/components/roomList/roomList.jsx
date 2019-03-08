import React, { Component } from 'react'
import { getRooms, deleteRoom } from '../../services/roomService'
import { Row, Col, Card } from 'react-materialize'
import { withRouter } from "react-router"
import './roomList.scss'
import { injectIntl, defineMessages } from "react-intl"
import { compose } from 'recompose'


const messages = defineMessages({
  connect: {
    id: 'roomList.connect',
    defaultMessage: 'Connect'
  },
  delete: {
    id: 'roomList.delete',
    defaultMessage: 'Delete'
  }
})

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
    const { intl: { formatMessage } } = this.props
    return (
      //TODO externaliser css en commun
      <div className="room-list-container">
        <Row>
          {this.state.rooms.map((room, index) => (

            <Col m={2} s={2}>
              <Card className="room-card" key={index} textClassName='black-text' title={room.name}
                actions={[
                  <button key="connect" className="button-linkstyle link-connect" onClick={() => this.redirect(room.code)}>{formatMessage(messages.connect)}</button>,
                  <button key="delete" className="button-linkstyle link-delete" onClick={() => this.removeRoom(room.code)}>{formatMessage(messages.delete)}</button>
                ]}>
                Room# {room.code}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
export default compose(
  withRouter,
  injectIntl
)(RoomList)