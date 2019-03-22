import React from "react"
import "./roomHeader.scss"

import { ReactComponent as Logo } from "../../../img/logo-text.svg"
import LangToggle from "../langToggle"

const RoomHeader = props => {
  const {
    roomName,
    roomCode,
    location: { state },
    history
  } = props

  const sameRoom = state && roomCode === state.roomCode

  const redirect = () => {
    history.push({ pathname: "/" })
  }

  return (
    <div className="roomHeader-container">
      <Logo className="roomHeader-logo" onClick={redirect} />
      <div>
        <h2 className="roomHeader-code">Room# {sameRoom ? roomCode : ""}</h2>
        <h3 className="roomHeader-title">{sameRoom ? roomName : ""}</h3>
      </div>
      <div className="lang-toggle-container">
        <LangToggle className="lang-toggle" />
      </div>
    </div>
  )
}

export default RoomHeader
