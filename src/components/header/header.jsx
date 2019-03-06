import React, {Component} from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../img/logo-text.svg'
import { withRouter } from "react-router"

class HeaderApp extends Component {

  constructor(props){
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    console.log("click")
    this.props.history.push({ pathname: "/" })
  }

  render() {
    return (
      <header className="app-header">
      <Logo className ="logo-header" onClick={this.redirect} />
    </header>
    )
  }
}

export default withRouter(HeaderApp)
