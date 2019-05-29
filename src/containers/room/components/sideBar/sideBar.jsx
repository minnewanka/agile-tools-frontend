/* eslint-disable no-nested-ternary */
import React from 'react'
import './sideBar.scss'
import ParticipantsList from './participantList'
import StatsBar from '../statsBar'
import { ReactComponent as LogoStats } from '../../../../img/logo-stats.svg'
import { ReactComponent as LogoReturn } from '../../../../img/arrow-uturn.svg'

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
      {showStats ? (
        <LogoReturn className="logo-icon" />
      ) : (
        <LogoStats className="logo-icon" />
      )}
    </button>
  )

  return (
    <div className="sideBarContainer custom-scrollbar">
      <div className="roomInfo">
        <div className="firstline">
          <h3 className="heading1">Room# {roomCode}</h3>
          {bstatistics}
        </div>

        {!showStats && <h5 className="heading2">{roomName}</h5>}
      </div>
      {!isFlipped && showStats ? (
        <StatsBar participants={participants} ceremony={ceremony} />
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
