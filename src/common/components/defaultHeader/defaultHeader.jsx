import React, { Component } from "react"
import "./defaultHeader.scss"
import { withRouter } from "react-router-dom"
import { ReactComponent as Logo } from "../../../img/logo-text.svg"
import LangToggle from "../langToggle"

class HeaderApp extends Component {
  constructor(props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    const { history } = this.props
    history.push({ pathname: "/" })
  }

  render() {
    return (
      <div className="app-header">
        <Logo className="logo-header" onClick={this.redirect} />
        <LangToggle />
      </div>
    )
  }
}

export default withRouter(HeaderApp)
