import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import RoomForm from './roomForm'
import { getRoom } from '../../../../services/roomService'

class LoadRoomForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomCode: '',
      error: false,
      errorServer: false,
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleFocus = () => {
    this.setState({ error: false })
  }

  handleChange = evt => {
    this.setState({ roomCode: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const { history } = this.props
    const { roomCode } = this.state
    if (!roomCode || !roomCode.trim()) {
      this.setState({ error: true })
      return
    }
    this.setState({ loading: true })
    getRoom(roomCode).then(
      room => {
        if (room) {
          history.push({
            pathname: '/room',
            state: { roomCode }
          })
        } else {
          this.setState({ errorServer: 'backend.roomNotFound', loading: false })
          setTimeout(() => {
            this.setState({ errorServer: '' })
          }, 5000)
        }
      },
      error => {
        this.setState({ errorServer: 'backend.connexion', loading: false })
        setTimeout(() => {
          this.setState({ errorServer: '' })
        }, 5000)
      }
    )
  }

  render() {
    const { error, errorServer, loading } = this.state
    const { translate } = this.props
    const inputData = {
      title: 'get.title',
      placeHolder: 'get.inputPlaceholder',
      errorMessage: 'get.fieldEmptyRoom',
      btnLabel: 'get.buttonCreate',
      minLength: 0,
      maxLength: 5
    }
    return (
      <RoomForm
        inputData={inputData}
        error={error}
        errorServer={errorServer}
        loading={loading}
        translate={translate}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleChange}
        handleFocus={this.handleFocus}
      />
    )
  }
}
export default withRouter(LoadRoomForm)
