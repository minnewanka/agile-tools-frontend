import React, { Component } from "react"
import "./tshirtCeremony.scss"
import { Row, Col } from "react-materialize"
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
      <div
        role="main"
        className="poker-planning-container"
        onClick={this.handleClick}
      >
        <Row className="card-row">
          <TransitionGroup>
            {participants
              .filter(participant => participant.tshirtVote)
              .map((participant, index) => {
                return (
                  <CSSTransition timeout={500} classNames="animation-card">
                    <Col s={6} m={4} l={3} xl={2} key={index}>
                      <Tshirt
                        key={index}
                        isFlipped={isFlipped}
                        vote={participant.tshirtVote}
                        username={participant.username}
                      />
                    </Col>
                  </CSSTransition>
                )
              })}
          </TransitionGroup>
        </Row>
      </div>
    )
  }
}

export default TshirtCeremony
