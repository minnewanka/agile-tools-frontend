import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import RoomForm from './roomForm'
import { createRoom } from '../../../../services/roomService'

class CreateRoomForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: '',
      roomCode: '',
      error: false,
      errorServer: false,
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this)
  }

  handleFocus = () => {
    this.setState({ error: false })
  }

  handleRoomNameChange = evt => {
    this.setState({ roomName: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const { history } = this.props
    const { roomName } = this.state
    if (!roomName || !roomName.trim()) {
      this.setState({ error: true })
      return
    }
    this.setState({ loading: true })
    createRoom(roomName).then(
      room => {
        const roomCode = room.get('code')
        history.push({
          pathname: '/room',
          state: { roomCode }
        })
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
      title: 'create.title',
      placeHolder: 'create.inputPlaceholder',
      errorMessage: 'create.fieldEmptyRoom',
      btnLabel: 'create.buttonCreate',
      minLength: 3,
      maxLength: 25
    }
    return (
      <RoomForm
        inputData={inputData}
        error={error}
        errorServer={errorServer}
        loading={loading}
        translate={translate}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleRoomNameChange}
        handleFocus={this.handleFocus}
      />
    )
  }
}
export default withRouter(CreateRoomForm)
