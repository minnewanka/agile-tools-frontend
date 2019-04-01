import React from "react"
import { Consumer } from "../../../context"
import Feedback from "./feedback"

const ContactUsConsumer = props => (
  <Consumer>
    {({ formatMessage }) => (
      <Feedback translate={formatMessage("feedback")} {...props} />
    )}
  </Consumer>
)

export default ContactUsConsumer
