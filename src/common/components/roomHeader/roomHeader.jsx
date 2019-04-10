import React from 'react'
import './roomHeader.scss'

import { ReactComponent as Logo } from '../../../img/logo-by-siicanada-bleu.svg'

const RoomHeader = props => {
  const {
    roomCode,
    location: { state },
    history
  } = props

  const sameRoom = state && roomCode === state.roomCode

  const redirect = () => {
    history.push({ pathname: '/' })
  }

  return (
    <div className="roomHeader-container">
      <Logo className="roomHeader-logo" onClick={redirect} />
      <div className="code-container">
        <span className="code-label">Room#</span>
        <span className="code-value">{sameRoom ? roomCode : ''}</span>
      </div>
    </div>
  )
}

export default RoomHeader
