import React, { Component } from 'react'
import './card.scss'
import ReactCardFlip from 'react-card-flip'
import { ReactComponent as Logo } from '../../../../img/logo-blanc.svg'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shake: false
    }
  }

  componentDidUpdate(prevProps) {
    const { vote } = this.props
    if (vote !== prevProps.vote) {
      // setState in an if claue is OK
      /* eslint-disable react/no-did-update-set-state */
      this.setState({ shake: true })
    }
  }

  render() {
    const { isFlipped, vote, username } = this.props
    const { shake } = this.state
    const voteToDisplay = vote === 'scissor' ? '\u2702' : vote
    return (
      <div
        className={`poker-card-container ${shake ? 'wobble-hor-bottom' : ''}`}
        onAnimationEnd={() => this.setState({ shake: false })}
      >
        <ReactCardFlip isFlipped={isFlipped}>
          <div key="front" className="poker-card card-front">
            <span className="content">{voteToDisplay}</span>
            <span className="topright">{voteToDisplay}</span>
            <span className="bottomleft">{voteToDisplay}</span>
          </div>

          <div key="back" className="poker-card card-back">
            {username === 'Chuck Norris' ? (
              <img
                src="images/chuck_norris.png"
                alt="chucknorris"
                className="chucknorris"
              />
            ) : (
              <Logo className="card-back-image" />
            )}
          </div>
        </ReactCardFlip>
        <span className="poker-card-username">{username}</span>
      </div>
    )
  }
}

export default Card
