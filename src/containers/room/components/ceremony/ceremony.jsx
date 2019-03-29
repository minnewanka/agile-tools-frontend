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
        .filter(participant => participant[ceremony])
        .map(participant => {
          return (
            <CSSTransition
              timeout={500}
              key={`pp${participant.username}`}
              classNames="animation-card"
            >
              <div className="col s12 m6 l3 l5ths poker-planning-col">
                {ceremony === "pokerplanning" ? (
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
              </div>
            </CSSTransition>
          )
        })}
    </TransitionGroup>
  )
}

export default PokerPlanning
