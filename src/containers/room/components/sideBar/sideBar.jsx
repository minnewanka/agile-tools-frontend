/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import './sideBar.scss'
import ParticipantsList from './participantList'
import ProgressBar from '../progressBar/progressBar'
import { ReactComponent as LogoStats } from '../../../../img/logo-stats.svg'

const SideBar = props => {
  const {
    ceremony,
    roomCode,
    roomName,
    participants,
    isFlipped,
    translate,
    showStats,
    toggleStats,
    readOnly
  } = props

  const bstatistics = isFlipped ? null : (
    <button type="button" className="logo-icon-container" onClick={toggleStats}>
      <LogoStats className="logo-icon" />
    </button>
  )

  return (
    <div className="sideBarContainer">
      <div className="roomInfo">
        <div className="firstline">
          <h3 className="heading1">Room# {roomCode}</h3>
          {bstatistics}
        </div>

        <h5 className="heading2">{roomName}</h5>
      </div>
      {!isFlipped && showStats ? (
        <ProgressBar participants={participants} ceremony={ceremony} />
      ) : (
        <ParticipantsList
          participants={participants}
          isFlipped={isFlipped}
          ceremony={ceremony}
          translate={translate}
          readOnly={readOnly}
        />
      )}
    </div>
  )
}

SideBar.defaultProps = {
  participants: []
}

export default SideBar
