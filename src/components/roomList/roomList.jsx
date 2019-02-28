import React, { Component } from 'react'
import { getRooms,deleteRoom } from '../../services/roomService'
import { Row, Col, Card } from 'react-materialize'
import { withRouter } from "react-router"
import './roomList.scss'

export class RoomList extends Component {

  constructor(props){
    super(props)
    this.state = {
      rooms:[]
    }
  }

  componentDidMount() {
    getRooms().then((results) => { this.setState({rooms:results}) })
  }
  redirect = (roomCode) => {
      this.props.history.push({ pathname: "/dashboard", state: { roomCode: roomCode } })
  }
  removeRoom(roomCodeToDelete) {
    console.log("remove")
    deleteRoom(roomCodeToDelete).then(() =>{
      console.log("deleted")
      const newArray = this.state.rooms.filter(room => room.code !== roomCodeToDelete)
      console.log("this.state.rooms.length",this.state.rooms.length)
      console.log("newArray",newArray.length)

      this.setState({rooms: newArray})
    })
  }

  render() {
    return (
      //TODO externaliser css en commun
      <div className="main-container">
        <Row>
        {  this.state.rooms.map((room,index) => (
          <Col key={index} m={2} s={12}>
          <Card className=" room-card-title" key={index} textClassName='black-text' title={room.name}
            actions={[
            <button key="connect" className="button-linkstyle link-connect" onClick={() => this.redirect(room.code)}>Connect</button>,
            <button key="delete"  className="button-linkstyle link-delete" onClick={() => this.removeRoom(room.code)}>Delete</button>
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

export default withRouter(RoomList)