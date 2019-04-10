import React from "react"
import "./ceremonySelection.scss"
import { Icon } from "react-materialize"

const CeremonySelection = props => {
  const { changeCeremony, ceremony } = props

  return (
    <div className="ceremonySelection">
      <div
        role="button"
        className={`ceremony-icon ${
          ceremony === "pokerplanning" ? "border-white" : ""
        }`}
        onClick={() => changeCeremony("pokerplanning")}
      >
        <div>poker planning</div>
        <Icon middle className="ceremony-icon">
          collections
        </Icon>
      </div>
      <div
        role="button"
        className={`ceremony-icon ${
          ceremony === "tshirt" ? "border-white" : ""
        }`}
        onClick={() => changeCeremony("tshirt")}
      >
        <div>tshirt</div>
        <Icon middle className="ceremony-icon">
          cloud
        </Icon>
      </div>
    </div>
  )
}

export default CeremonySelection
