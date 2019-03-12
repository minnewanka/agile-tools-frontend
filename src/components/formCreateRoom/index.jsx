import React from "react"
import { withRouter } from "react-router-dom"
import FormCreateRoom from "./formCreateRoom"
import { Consumer } from "../../context"

const FormCreateRoomConsumer = props => {
  return (
    <Consumer>
      {({ formatMessage }) => (
        <FormCreateRoom translate={formatMessage("createRoom")} {...props} />
      )}
    </Consumer>
  )
}

export default withRouter(FormCreateRoomConsumer)
