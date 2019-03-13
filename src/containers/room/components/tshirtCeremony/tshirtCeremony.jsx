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
              .filter(participant => participant.tshirtVote !== undefined)
              .map((participant, index) => {
                return (
                  <CSSTransition timeout={500} classNames="animation-card">
                    <Col l={2} key={index}>
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
        <Row className="center-align">{/* {stats} */}</Row>
      </div>
    )
  }
}

export default TshirtCeremony
