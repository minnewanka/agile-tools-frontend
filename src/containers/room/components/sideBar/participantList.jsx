/* eslint-disable no-nested-ternary */
import React from 'react'
import './participantList.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { sortParticipants } from '../../utils'
import ParticipantItem from './participantItem'

const ParticipantsList = props => {
  const { participants, isFlipped, ceremony, translate, readOnly } = props

  let participantsToRender = participants
  if (!isFlipped) {
    participantsToRender = sortParticipants(participants, ceremony)
  }

  return (
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
  )
}

export default ParticipantsList
