import React from "react"
import { Consumer } from "../../../context"
import ContactUs from "./contactUs"

const ContactUsConsumer = props => (
  <Consumer>
    {({ formatMessage }) => (
      <ContactUs translate={formatMessage("contactUs")} {...props} />
    )}
  </Consumer>
)

export default ContactUsConsumer
