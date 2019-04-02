import React from "react"
import SideBar from "./sideBar"
import { Consumer } from "../../../../context"

const SideBarConsumer = props => {
  return (
    <Consumer>
      {({ currentRoom: { isFlipped }, formatMessage }) => (
        <SideBar
          isFlipped={isFlipped}
          {...props}
          translate={formatMessage("sideBar")}
        />
      )}
    </Consumer>
  )
}

export default SideBarConsumer
