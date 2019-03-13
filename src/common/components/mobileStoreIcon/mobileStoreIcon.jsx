import React from "react"

const MobileStoreIcon = ({ storeName = "google", locale }) => (
  <a href="https://www.siicanada.com/fr/">
    <img
      className="app-badge"
      src={`images/${storeName}-badge-${locale}.png`}
      alt=""
    />
  </a>
)

export default MobileStoreIcon
