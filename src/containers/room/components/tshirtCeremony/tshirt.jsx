import React from "react"
import "./tshirt.scss"
import ReactCardFlip from "react-card-flip"
import { ReactComponent as TshirtBack } from "../../../../img/tshirt-back.svg"
import { ReactComponent as TshirtFront } from "../../../../img/tshirt-front.svg"

const Tshirt = ({ isFlipped, vote, username }) => (
  <div className="tshirt-container">
    <ReactCardFlip isFlipped={isFlipped}>
      <div key="front">
        <TshirtFront />
        <div className="floatTL">
          <span className="span-tshirt-size">{vote}</span>
        </div>
      </div>
      <div key="back">
        <TshirtBack />
      </div>
    </ReactCardFlip>
    <span className="tshirt-username">{username}</span>
  </div>
)

export default Tshirt
