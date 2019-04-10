import React, { Component } from 'react'
import './card.scss'
import ReactCardFlip from 'react-card-flip'
import { ReactComponent as Logo } from '../../../../img/logo-blanc.svg'
import { ReactComponent as Scissor } from '../../../../img/open-scissors.svg'

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
    return (
      <div
        className={`poker-card-container ${shake ? 'wobble-hor-bottom' : ''}`}
        onAnimationEnd={() => this.setState({ shake: false })}
      >
        <ReactCardFlip isFlipped={isFlipped}>
          <div key="front" className="poker-card card-front">
            {vote !== 'scissor' ? (
              <>
                <span className="content">{vote}</span>
                <span className="topright">{vote}</span>
                <span className="bottomleft">{vote}</span>
              </>
            ) : (
              <Scissor className="scissor" />
            )}
          </div>

          <div key="back" className="poker-card card-back">
            <Logo className="card-back-image" />
          </div>
        </ReactCardFlip>
        <span className="poker-card-username">{username}</span>
      </div>
    )
  }
}

export default Card
