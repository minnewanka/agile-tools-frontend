import React from "react"
import SideBar from "./sideBar"
import { Consumer } from "../../../../context"

const SideBarConsumer = props => {
  return (
    <Consumer>
      {({ currentRoom: { isFlipped } }) => (
        <SideBar isFlipped={isFlipped} {...props} />
      )}
    </Consumer>
  )
}

export default SideBarConsumer
