import React from "react"
import Footer from "./footer"
import { Consumer } from "../../../context"

const FooterConsumer = props => (
  <Consumer>{({ locale }) => <Footer locale={locale} {...props} />}</Consumer>
)

export default FooterConsumer
