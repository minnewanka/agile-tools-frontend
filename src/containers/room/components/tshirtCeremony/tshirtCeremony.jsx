import React from "react"
import "./tshirtCeremony.scss"
import { Col } from "react-materialize"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Tshirt from "./tshirt"

const TshirtCeremony = ({ participants, toogleFlipped, isFlipped }) => {
  return (
    <TransitionGroup
      className="tshirt-ceremony-container"
      onClick={toogleFlipped}
    >
      {participants
        .filter(participant => participant.tshirtVote)
        .map(participant => {
          return (
            <CSSTransition
              timeout={500}
              classNames="animation-card"
              key={`tshirt${participant.username}`}
            >
              <Col className="tshirt-ceremony-col" s={12} m={6} l={3}>
                <Tshirt
                  isFlipped={isFlipped}
                  vote={participant.tshirtVote}
                  username={participant.username}
                />
              </Col>
            </CSSTransition>
          )
        })}
    </TransitionGroup>
  )
}

export default TshirtCeremony
