import React, { Component } from "react"
import "./roomHeader.scss"
import { withRouter } from "react-router-dom"
import { ReactComponent as Logo } from "../../img/logo-text.svg"

class RoomHeader extends Component {
  constructor(props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    const { history } = this.props
    history.push({ pathname: "/" })
  }

  render() {
    const { roomName, roomCode } = this.props
    return (
      <div className="roomHeader-container">
        <Logo className="roomHeader-logo" onClick={this.redirect} />
        <h1 className="roomHeader-title">{roomName}</h1>
        <h1 className="roomHeader-code">Room# {roomCode}</h1>
      </div>
    )
  }
}

export default withRouter(RoomHeader)
