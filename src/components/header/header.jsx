import React, { Component } from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../img/logo-text.svg'
import { withRouter } from "react-router"
import { Consumer } from '../../context/index'


class HeaderApp extends Component {

  constructor(props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    console.log("click")
    this.props.history.push({ pathname: "/" })
  }

  render() {
    return (
      <Consumer>
        {({ locale, changeLang }) => (
          <div className="app-header">
            <div className="languages">
              <button 
              className={locale === "en" ? "button-linkstyle-lang" : "button-linkstyle-lang underline"}
               onClick={() => { changeLang("en") }}>EN</button>
              <span>/</span>
              <button
               className={locale === "fr" ? "button-linkstyle-lang" : "button-linkstyle-lang underline"}
              onClick={() => { changeLang("fr") }}>FR</button>
            </div>
            <Logo className="logo-header" onClick={this.redirect} />

          </div>
        )}
      </Consumer>
    )
  }
}

export default withRouter(HeaderApp)
