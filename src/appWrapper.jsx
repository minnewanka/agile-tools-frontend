import React, { Component } from "react"
import App from "./app"
import allMessages from "./services/IntlManager"
import { Provider } from "./context/index"

class AppWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: "en",
      changeLang: this.changeLang.bind(this),
      messages: allMessages,
      formatMessage: this.formatMessage.bind(this)
    }
  }

  formatMessage = (prefix = "createRoom") => key => {
    const { messages, locale } = this.state
    return messages[locale][`${prefix}.${key}`]
  }

  changeLang() {
    this.setState(({ locale }) => {
      const newLocale = locale === "fr" ? "en" : "fr"
      return { locale: newLocale }
    })
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
