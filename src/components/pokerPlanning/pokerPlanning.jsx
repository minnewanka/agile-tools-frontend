import React, { Component } from "react"
import "./pokerPlanning.scss"
import { Row, Col } from "react-materialize"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Card from "./card"

class PokerPlanning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: true,
      maxVote: 0,
      minVote: 1000,
      sumVote: 0,
      median: 0,
      mounted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({ mounted: true })
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
              .filter(participant => participant.pokerVote !== undefined)
              .map((participant, index) => {
                return (
                  <CSSTransition timeout={500} classNames="animation-card">
                    <Col l={2} key={index} className="card-column">
                      <Card
                        key={index}
                        isFlipped={isFlipped}
                        vote={participant.pokerVote}
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

export default PokerPlanning
