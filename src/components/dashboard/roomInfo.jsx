import React, {Component} from 'react'
import './dashboard.scss'
import { withRouter } from "react-router-dom"
import { ReactComponent as Logo } from '../../img/logo-text.svg'

class RoomInfo extends Component {

  constructor(props){
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    const { history } = this.props
    history.push({ pathname: "/" })
  }
  
  render(){
    const { roomName, roomCode } = this.props
    return(
      <div className="room-container">
        <Logo className="room-title-logo" onClick={this.redirect} />
        <h1 className="room-title-box">{roomName}</h1>
        <h1 className="room-code-box">Room# {roomCode}</h1>
      </div>
    )
  }

}

export default withRouter(RoomInfo)
