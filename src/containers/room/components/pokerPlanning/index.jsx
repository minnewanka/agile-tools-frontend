import React from "react"
import PokerPlanning from "./pokerPlanning"
import { Consumer } from "../../../../context"

const PokerPlanningConsumer = props => {
  return (
    <Consumer>
      {({ currentRoom: { isFlipped, toggleFlipped } }) => (
        <PokerPlanning
          isFlipped={isFlipped}
          toogleFlipped={toggleFlipped}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default PokerPlanningConsumer
