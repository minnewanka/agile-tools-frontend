import React, { Component } from 'react'
import './pokerPlanning.scss'
import Card from './card'
import { Row, Col } from 'react-materialize'

class PokerPlanning extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFlipped: true,
      maxVote: 0,
      minVote: 1000,
      sumVote: 0,
      median: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.calculateStats = this.calculateStats.bind(this)
    this.calculateSumVote = this.calculateSumVote.bind(this)
    this.median = this.median.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  median(values) {

    values.sort(function (a, b) { return a - b; })
    var half = Math.floor(values.length / 2)
    if (values.length % 2)
      return values[half]
    else
      return (values[half - 1] + values[half]) / 2.0;
  }

  calculateStats() {
    const votes = this.props.participants.filter((participant) => (participant.vote !== undefined && !isNaN(participant.vote)))
      .map((participant) => (participant.vote)).map(Number).sort()

    this.setState({
      minVote: Math.min(...votes),
      maxVote: Math.max(...votes),
      sumVote: votes.reduce((sum, current) => sum + current, 0),
      median: this.median(votes)
    })

  }
  calculateSumVote(participants) {
    return participants.filter((participant) => (participant.vote !== undefined && !isNaN(participant.vote)))
      .map((participant) => (participant.vote)).map(Number).reduce((sum, current) => sum + current, 0)
  }

  componentDidUpdate(oldProps) {
    const OldSumVotes = this.calculateSumVote(oldProps.participants)
    if (OldSumVotes !== this.state.sumVote) {
      this.calculateStats()
    }

  }

  render() {
    let stats;
    if (!this.state.isFlipped && this.state.minVote !== this.state.maxVote) {
      stats = <div>
        <ul>MIN : {this.state.minVote}</ul>
        <ul>MAX : {this.state.maxVote}</ul>
        <ul>MAX_OCC :</ul>
        <ul>MEDIANE : {this.state.median}</ul>
      </div>
    }
    return (
      <div className="poker-planning-container" onClick={this.handleClick}>
        <Row className="card-row">
          {this.props.participants.filter((participant) => (participant.vote !== undefined)).map((participant, index) => {
            return <Col l={2} key={index}><Card key={index} isFlipped={this.state.isFlipped} vote={participant.vote} username={participant.username} /> </Col>
          })}
        </Row>
        <Row className="center-align" >
          {stats}
        </Row>
      </div>
    )
  }

}



export default PokerPlanning