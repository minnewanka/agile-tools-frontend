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
import { injectIntl, defineMessages } from "react-intl"
import { compose } from 'recompose'


const messages = defineMessages({
  formTitle: {
    id: 'createRoom.title',
    defaultMessage: 'Create a Room'
  },
  buttonCreate: {
    id: 'createRoom.button',
    defaultMessage: 'Create'
  },
  redirectLink: {
    id: 'createRoom.redirect',
    defaultMessage: 'Load existing Room'
  },
  inputLabel: {
    id: 'createRoom.label',
    defaultMessage: 'Room name'
  },
  textMobile: {
    id: 'createRoom.mobile',
    defaultMessage: 'Get mobile app'
  },
  fieldEmptyRoom: {
    id: 'createRoom.fieldEmptyRoom',
    defaultMessage: 'Empty room name field'
  }
})

export class FormCreateRoom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      roomName: "",
      roomCode: "",
      error: false,
      errorServer: false,
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
    this.setState({ error: false })
  }
  validate(roomName) {
    return roomName.length === 0 ? false : true
  }

  handleSubmit(evt) {
    if (this.state.roomName.length === 0) {
      this.setState({ error: true })
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
    const { intl: { formatMessage } } = this.props
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
            title={formatMessage(messages.formTitle)}
          >
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Input
                  className={this.state.error ? "error" : ""}
                  type="text"
                  m={12}
                  s={12}
                  label={formatMessage(messages.inputLabel)}
                  error={this.state.error ? formatMessage(messages.fieldEmptyRoom) : ""}
                  validate
                  onChange={this.handleRoomNameChange}
                  onFocus={this.handleRoomNameFocus}
                />
                <div className={this.state.loading ? classNameBtnCreate + ' loading' : classNameBtnCreate}>
                  <Button waves='light' className="btn-create">{formatMessage(messages.buttonCreate)}</Button>
                </div>
                <Loader
                  key={2}
                  loading={this.state.loading}
                />

              </Row>
            </form>
            {this.redirect()}
            <div className="right-align"><Link to="/rooms">{formatMessage(messages.redirectLink)}</Link> </div>
          </Card>
        </div>

        <div className="store-badge-container">
          <span className="store-badge-text">{formatMessage(messages.textMobile)}</span>
          <img className="app-badge" src={GooglePlay} alt="" />
          <AppStore className="app-badge" />
        </div>
      </div>
    )
  }
}
export default compose(
  withRouter,
  injectIntl
)(FormCreateRoom)