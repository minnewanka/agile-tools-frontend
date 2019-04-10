import React from "react"
import "./mobileStoreIcon.scss"
import { ReactComponent as AppleBadgeEN } from "../../../img/apple-badge-en.svg"
import { ReactComponent as AppleBadgeFR } from "../../../img/apple-badge-fr.svg"

const MobileStoreIcon = ({ locale }) => (
  <div className="badge-container">
    <div className="google-badge-container">
      <a
        href="https://www.siicanada.com/fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`images/google-badge-${locale}.png`}
          alt=""
          className="google-badge"
        />
      </a>
    </div>
    <div className="apple-badge-container">
      <a
        href="https://www.siicanada.com/fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {locale === "fr" ? (
          <AppleBadgeFR className="apple-badge" />
        ) : (
          <AppleBadgeEN className="apple-badge" />
        )}
      </a>
    </div>
  </div>
)

export default MobileStoreIcon
