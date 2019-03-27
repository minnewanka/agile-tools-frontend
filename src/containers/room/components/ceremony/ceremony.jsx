import React from "react"
import "./ceremony.scss"
import { Col } from "react-materialize"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Card from "./card"
import Tshirt from "./tshirt"

const PokerPlanning = props => {
  const { ceremony, participants, isFlipped, toogleFlipped } = props
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
                {ceremony === "pokerplanning" ? (
                  <Card
                    isFlipped={isFlipped}
                    vote={participant.pokerVote}
                    username={participant.username}
                  />
                ) : (
                  <Tshirt
                    isFlipped={isFlipped}
                    vote={participant.tshirtVote}
                    username={participant.username}
                  />
                )}
              </Col>
            </CSSTransition>
          )
        })}
    </TransitionGroup>
  )
}

export default PokerPlanning
