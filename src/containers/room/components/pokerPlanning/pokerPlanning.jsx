import React from "react"
import "./pokerPlanning.scss"
import { Col } from "react-materialize"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Card from "./card"

const PokerPlanning = props => {
  const { participants, isFlipped, toogleFlipped } = props
  console.log(props)
  return (
    <TransitionGroup
      className="poker-planning-container row"
      onClick={toogleFlipped}
    >
      {participants
        .filter(participant => participant.pokerVote)
        .map(participant => {
          return (
            <CSSTransition
              timeout={500}
              key={`pp${participant.username}`}
              classNames="animation-card"
            >
              <Col className="poker-planning-col" s={12} m={6} l={3}>
                <Card
                  isFlipped={isFlipped}
                  vote={participant.pokerVote}
                  username={participant.username}
                />
              </Col>
            </CSSTransition>
          )
        })}
    </TransitionGroup>
  )
}

export default PokerPlanning
