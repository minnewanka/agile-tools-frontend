import React, { Component } from "react"
import "./tshirt.scss"
import ReactCardFlip from "react-card-flip"
import { ReactComponent as TshirtBack } from "../../../../img/tshirt-back.svg"
import { ReactComponent as TshirtFront } from "../../../../img/tshirt-front.svg"

class Tshirt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shake: false
    }
  }

  componentDidUpdate(prevProps) {
    const { vote } = this.props
    if (vote !== prevProps.vote) {
      this.setState({ shake: true })
    }
  }

  render() {
    const { isFlipped, vote, username } = this.props
    const { shake } = this.state
    return (
      <div className={`tshirt-container ${shake ? "wobble-hor-bottom" : ""}`}>
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
  }
}

export default Tshirt
