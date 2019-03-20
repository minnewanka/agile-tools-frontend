import React from "react"
import { Consumer } from "../../../context"
import Footer from "./footer"

const FooterConsumer = props => (
  <Consumer>
    {({ formatMessage }) => (
      <Footer translate={formatMessage("footer")} {...props} />
    )}
  </Consumer>
)

export default FooterConsumer
