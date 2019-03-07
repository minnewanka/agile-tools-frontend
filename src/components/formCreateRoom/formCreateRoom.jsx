import React, { Component } from 'react'
import './formCreateRoom.scss'
import { Button, Card, Input, Row } from 'react-materialize'
import { createRoom } from '../../services/roomService'
import ErrorMessage from '../errorMessage/errorMessage'
import Loader from '../loader/loader'
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import GooglePlay from '../../img/google-play-badge-en.png'
import { ReactComponent as AppStore } from '../../img/appstore-badge-fr.svg'



export class FormCreateRoom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      roomName: "",
      roomCode: "",
      error: false,
      errorServer: false,
      errorMessage: "",
      loading: false,
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this)
    this.handleRoomNameFocus = this.handleRoomNameFocus.bind(this)

  }

  handleRoomNameChange = (evt) => {
    this.setState({ roomName: evt.target.value })
  }

  handleRoomNameFocus = () => {
    this.setState({ error: false, errorMessage: "" })
  }
  validate(roomName) {
    return roomName.length === 0 ? false : true
  }

  handleSubmit(evt) {
    if (this.state.roomName.length === 0) {
      this.setState({ error: true, errorMessage: "Empty room name field" })
      evt.preventDefault()
      return
    }
    this.setState({ loading: true })
    const { roomName } = this.state
    createRoom(roomName).then((room) => {
      this.setState({ errorServer: false, loading: false, redirect: true, roomCode: room.get("code") })
    }, (error) => {
      console.error('Failed to create new object, with error code: ' + error.message)
      this.setState({ errorServer: true, loading: false })
      setTimeout(() => {
        this.setState({ errorServer: false })
      }, 5000)
    })
    evt.preventDefault()
  }

  redirect = () => {
    if (this.state.redirect) {
      this.props.history.push({ pathname: "/dashboard", state: { roomCode: this.state.roomCode } })
    }
  }

  render() {
    const classNameBtnCreate = 'center-align'
    return (

      <div className='main-container'>

      <div className="card-session">
      <ErrorMessage
          key={0}
          error={this.state.errorServer}
        />
        <Card
          key={1}
          className='white'
          textClassName='black-text'
          title='Create a Room'
        >
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Input
                className={this.state.error ? "error" : ""}
                type="text"
                m={12}
                s={12}
                label="Room name"
                error={this.state.errorMessage}
                validate
                onChange={this.handleRoomNameChange}
                onFocus={this.handleRoomNameFocus}
              />
              <div className={this.state.loading ? classNameBtnCreate + ' loading' : classNameBtnCreate}>
                <Button waves='light' className="btn-create">Create</Button>
              </div>
              <Loader
                key={2}
                loading={this.state.loading}
              />

            </Row>
          </form>
          {this.redirect()}
          <div className="right-align"><Link to="/rooms">Load existing Room</Link> </div>
        </Card>
      </div>
     
        <div className="store-badge-container">
         <span className="store-badge-text">Obtenez l’application mobile</span>
          <img className="app-badge" src={GooglePlay} alt="" />
          <AppStore className="app-badge" />
        </div>
      </div>
    )
  }
}
export default withRouter(FormCreateRoom)
