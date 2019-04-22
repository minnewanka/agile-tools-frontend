import React, { Component } from 'react'
import './defaultHeader.scss'

import { ReactComponent as LogoBlanc } from '../../../img/logo-by-siicanada-blanc.svg'
import { ReactComponent as LogoBleu } from '../../../img/logo-by-siicanada-bleu.svg'
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
    const { logoColor } = this.props
    return (
      <div className="app-header">
        {logoColor === 'blue' ? (
          <LogoBleu className="logo-header" onClick={this.redirect} />
        ) : (
          <LogoBlanc className="logo-header" onClick={this.redirect} />
        )}
        <LangToggle className="default-header-toggle" />
      </div>
    )
  }
}

export default DefaultHeader
