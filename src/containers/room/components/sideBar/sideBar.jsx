/* eslint-disable no-nested-ternary */
import React from 'react'
import './sideBar.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ParticipantItem from './participantItem'
import sortParticipants from './utils'

const SideBar = props => {
  const {
    ceremony,
    roomCode,
    roomName,
    translate,
    participants,
    isFlipped,
    readOnly
  } = props

  let participantsToRender = participants
  if (!isFlipped) {
    participantsToRender = sortParticipants(participants, ceremony)
  }

  return (
    <div className="sideBarContainer">
      <div className="roomInfo">
        <h3 className="heading1">Room# {roomCode}</h3>
        <h5 className="heading2">{roomName}</h5>
      </div>

      <ul className="participants-list custom-scrollbar">
        <TransitionGroup>
          {participantsToRender.map(participant => (
            <CSSTransition
              timeout={500}
              classNames="fade"
              key={`sideBarParticipant${participant.username}`}
            >
              <li>
                <ParticipantItem
                  readOnly={readOnly}
                  participant={participant}
                  isFlipped={isFlipped}
                  ceremony={ceremony}
                  translate={translate}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  )
}

export default SideBar
