import React, { Component } from 'react'
import './defaultHeader.scss'

import { ReactComponent as Logo } from '../../../img/logo-by-siicanada-blanc.svg'
import LangToggle from '../langToggle'

class DefaultHeader extends Component {
  constructor(props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    const { history } = this.props
    history.push({ pathname: '/' })
  }

  render() {
    return (
      <div className="app-header">
        <Logo className="logo-header" onClick={this.redirect} />
        <LangToggle className="default-header-toggle" />
      </div>
    )
  }
}

export default DefaultHeader
