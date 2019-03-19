import React, { Component } from "react"
import "./pokerPlanning.scss"
import { Col } from "react-materialize"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Card from "./card"

class PokerPlanning extends Component {
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
        className="poker-planning-container row"
        onClick={this.handleClick}
      >
        {participants
          .filter(participant => participant.pokerVote)
          .map(participant => {
            return (
              <CSSTransition
                timeout={500}
                key={participant.username}
                classNames="poker-card-container animation-card"
              >
                <Col className="poker-planning-col " s={12} m={6} l={3}>
                  <Card
                    key={participant.username}
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
}

export default PokerPlanning
