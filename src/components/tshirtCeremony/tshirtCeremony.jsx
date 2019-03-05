import React, { Component } from 'react'
import './tshirtCeremony.scss'
import Tshirt from './tshirt'
import { Row, Col } from 'react-materialize'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class TshirtCeremony extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFlipped: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render() {
    return (
      <div className="poker-planning-container" onClick={this.handleClick}>
        <Row className="card-row">
          <TransitionGroup>
            {this.props.participants.filter((participant) => (participant.tshirtVote !== undefined)).map((participant, index) => {
              return <CSSTransition
                timeout={500}
                classNames="animation-card">
                <Col l={2} key={index}>
                  <Tshirt key={index} isFlipped={this.state.isFlipped} vote={participant.tshirtVote} username={participant.username} />
                </Col>
              </CSSTransition>
            })}
          </TransitionGroup>
        </Row>
        <Row className="center-align" >
          {/* {stats} */}
        </Row>
      </div>
    )
  }

}

export default TshirtCeremony