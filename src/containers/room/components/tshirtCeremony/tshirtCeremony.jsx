import React, { Component } from "react"
import "./tshirtCeremony.scss"
import { Col } from "react-materialize"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Tshirt from "./tshirt"

class TshirtCeremony extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render() {
    const { participants } = this.props
    const { isFlipped } = this.state
    return (
      <TransitionGroup
        className="tshirt-ceremony-container"
        onClick={this.handleClick}
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
}

export default TshirtCeremony
