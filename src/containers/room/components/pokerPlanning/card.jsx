import React from "react"
import "./pokerPlanning.scss"
import ReactCardFlip from "react-card-flip"
import { ReactComponent as Logo } from "../../../../img/logo-blanc.svg"

const Card = ({ isFlipped, vote, username }) => (
  <div>
    <ReactCardFlip isFlipped={isFlipped} className="flipper">
      <div key="front" className="poker-card card-front">
        <span className="card-front-content">{vote}</span>
        <span className="card-front-topright">{vote}</span>
        <span className="card-front-bottomleft">{vote}</span>
      </div>

      <div key="back" className="poker-card card-back">
        <Logo className="card-back-image" />
      </div>
    </ReactCardFlip>
    <span className="poker-card-username">{username}</span>
  </div>
)

export default Card
