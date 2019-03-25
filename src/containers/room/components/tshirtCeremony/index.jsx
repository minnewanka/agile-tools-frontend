import React from "react"
import TshirtCeremony from "./tshirtCeremony"
import { Consumer } from "../../../../context"

const TshirtCeremonyConsumer = props => {
  return (
    <Consumer>
      {({ currentRoom: { isFlipped, toggleFlipped } }) => (
        <TshirtCeremony
          isFlipped={isFlipped}
          toogleFlipped={toggleFlipped}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default TshirtCeremonyConsumer
