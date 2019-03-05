import React, {Component} from 'react'
import './dashboard.scss'
import { ReactComponent as Logo } from '../../img/logosii.svg'
import { withRouter } from "react-router"

class RoomInfo extends Component {

  constructor(props){
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    console.log("click")
    this.props.history.push({ pathname: "/" })
  }
  
  render(){
    return(
      <div className = "room-container" >
        <Logo className="room-title-logo" onClick={this.redirect} />
        <h1 className="room-title-box">{this.props.roomName}</h1>
        <h1 className="room-code-box">Room# {this.props.roomCode}</h1>
     </div>
    )
  }

}


export default withRouter(RoomInfo)
