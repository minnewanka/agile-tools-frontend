import React from 'react'
import './ceremony.scss'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Card from './card'
import Tshirt from './tshirt'

const PokerPlanning = props => {
  const { ceremony, participants, isFlipped } = props
  return (
    <TransitionGroup className="poker-planning-container  custom-scrollbar">
      {participants
        .filter(participant => participant[ceremony])
        .map(participant => {
          return (
            <CSSTransition
              timeout={500}
              key={`pp${participant.username}`}
              classNames="animation-card"
            >
              {ceremony === 'pokerplanning' ? (
                <Card
                  isFlipped={isFlipped}
                  vote={participant.pokerplanning}
                  username={participant.username}
                />
              ) : (
                <Tshirt
                  isFlipped={isFlipped}
                  vote={participant.tshirt}
                  username={participant.username}
                />
              )}
            </CSSTransition>
          )
        })}
    </TransitionGroup>
  )
}

export default PokerPlanning
