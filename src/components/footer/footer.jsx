import React from "react"
import "./footer.scss"

const FooterApp = () => {
  return (
    <footer className="page-footer-1">
      <div className="footer-copyright">
        <div className="copyright-container">
          Copyright 2019 SII Canada | All Rights Reserved
        </div>
        <div className="powered-container">
          <a
            className="grey-text text-lighten-4 right"
            href="https://www.siicanada.com/fr/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Powered by Sii Canada
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterApp
