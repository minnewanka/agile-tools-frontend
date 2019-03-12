import React from "react"

const MobileStoreIcon = ({ storeName, locale }) => (
  <a href="https://www.siicanada.com/fr/">
    <img
      className="app-badge"
      src={
        storeName === "google"
          ? `images/google-play-badge-${locale}.png`
          : `images/app-store-badge-${locale}.png`
      }
      alt=""
    />
  </a>
)

export default MobileStoreIcon
