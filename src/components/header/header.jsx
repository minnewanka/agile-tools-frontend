import React, { Component } from 'react'
import './header.scss'
import { withRouter } from "react-router-dom"
import { ReactComponent as Logo } from '../../img/logo-text.svg'
import { Consumer } from '../../context/index'


class HeaderApp extends Component {

  constructor(props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    const {history} = this.props
    history.push({ pathname: "/" })
  }

  render() {
    return (
      <Consumer>
        {({ locale, changeLang }) => (
          <div className="app-header">
            <div className="languages">
              <button 
                type="button"
                className={locale === "en" ? "button-linkstyle-lang" : "button-linkstyle-lang underline"}
                onClick={() => { changeLang("en") }}
              >EN
              </button>
              <span>/</span>
              <button
                type="button"
                className={locale === "fr" ? "button-linkstyle-lang" : "button-linkstyle-lang underline"}
                onClick={() => { changeLang("fr") }}
              >FR
              </button>
            </div>
            <Logo className="logo-header" onClick={this.redirect} />

          </div>
        )}
      </Consumer>
    )
  }
}

export default withRouter(HeaderApp)
