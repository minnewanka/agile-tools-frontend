import React from 'react'
import './ceremony.scss'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Card from './card'
import Tshirt from './tshirt'
import TrafficLight from './trafficlight'

const PokerPlanning = props => {
  const { ceremony, participants, isFlipped } = props

  const Element = ({ type, participant }) => {
    switch (type) {
      case 'pokerplanning':
        return (
          <Card
            isFlipped={isFlipped}
            vote={participant.pokerplanning}
            username={participant.username}
          />
        )

      case 'tshirt':
        return (
          <Tshirt
            isFlipped={isFlipped}
            vote={participant.tshirt}
            username={participant.username}
          />
        )
      case 'trafficlight':
        return (
          <TrafficLight
            isFlipped={isFlipped}
            vote={participant.trafficlight}
            username={participant.username}
          />
        )
      default:
        return null
    }
  }

  return (
    <TransitionGroup
      key={ceremony}
      className="poker-planning-container  custom-scrollbar"
    >
      {participants
        .filter(participant => participant[ceremony])
        .map(participant => {
          return (
            <CSSTransition
              timeout={500}
              key={`pp${participant.username}`}
              classNames="animation-card"
            >
              {Element({ type: ceremony, participant })}
            </CSSTransition>
          )
        })}
    </TransitionGroup>
  )
}

export default PokerPlanning
