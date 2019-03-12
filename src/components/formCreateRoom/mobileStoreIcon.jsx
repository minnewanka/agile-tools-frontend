import React from "react"
import { Consumer } from "../../context"

const MobileStoreIcon = ({ storeName = "google", locale }) => (
  <a href="https://www.siicanada.com/fr/">
    <img
      className="app-badge"
      src={`images/${storeName}-badge-${locale}.png`}
      alt=""
    />
  </a>
)

const MobileStoreIconConsumer = props => (
  <Consumer>
    {({ locale }) => <MobileStoreIcon locale={locale} {...props} />}
  </Consumer>
)

export default MobileStoreIconConsumer
