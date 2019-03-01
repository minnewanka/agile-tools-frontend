import React, { Component } from 'react'
import './tshirtCeremony.scss'
import Tshirt from './tshirt'
import { Row, Col } from 'react-materialize'

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
    return(
      <div className="poker-planning-container" onClick={this.handleClick}>
      <Row className="card-row">
        {this.props.participants.filter((participant) => (participant.tshirtVote !== undefined)).map((participant, index) => {
          return <Col l={2} key={index}><Tshirt key={index} isFlipped={this.state.isFlipped} vote={participant.tshirtVote} username={participant.username} /> </Col>
        })}
      </Row>
      <Row className="center-align" >
        {/* {stats} */}
      </Row>
    </div>
    )
  }

}

export default TshirtCeremony