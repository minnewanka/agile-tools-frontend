import React from 'react'
import './dashboard.scss'

const RoomInfo = ({ roomName, roomCode }) => (

  <div className="room-container">
    <h1 className="room-title-box">{roomName}</h1>
    <h1 className="room-code-box">Room# {roomCode}</h1>
  </div>

)
export default RoomInfo
