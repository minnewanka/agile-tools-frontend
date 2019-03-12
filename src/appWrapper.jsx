import React, { Component } from "react"
import App from "./app"
import getAllMessages from "./services/IntlManager"
import { Provider } from "./context/index"

class AppWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: "en",
      changeLang: this.changeLang.bind(this),
      messages: getAllMessages("en")
    }
  }

  changeLang(locale) {
    this.setState({ locale, messages: getAllMessages(locale) })
  }

  render() {
    return (
      <Provider value={this.state}>
        <App />
      </Provider>
    )
  }
}

export default AppWrapper
