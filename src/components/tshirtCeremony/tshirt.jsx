import React from 'react'
import './tshirtCeremony.scss'
import ReactCardFlip from 'react-card-flip'
import { ReactComponent as TshirtBack } from '../../img/tshirt-back.svg'
import { ReactComponent as TshirtFront } from '../../img/tshirt-front.svg'

const Tshirt = ({ isFlipped, vote, username }) => (
  <div className="card-container">
    <ReactCardFlip isFlipped={isFlipped} className="flipper" >
      <div key="front" >
        <div className="tshirt-wrapper">
          <TshirtFront className="svg-tshirt" />
          <span className="span-tshirt-size">S</span>
        </div>
      </div>
      <div key="back" >
        <TshirtBack />
      </div>
    </ReactCardFlip>
    <span className="poker-card-username">{username}</span>
  </div>
)

export default Tshirt    