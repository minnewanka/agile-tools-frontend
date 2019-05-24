import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

const FooterApp = ({ locale, translate }) => {
  return (
    <footer className="page-footer-1">
      <div className="footer-container">
        <div className="copyright-container">
          Copyright 2019 SII Canada | All Rights Reserved |{' '}
          <Link to="/privacy-policy" className="privacy">
            {translate('title')}
          </Link>
        </div>
        <div className="powered-container">
          <a
            className="grey-text text-lighten-4 right link"
            href={`https://www.siicanada.com/${locale}/`}
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
