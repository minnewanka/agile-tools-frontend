import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from "react-intl"
import frLocaleData from "react-intl/locale-data/fr"
import App from "./app"
import getAllMessages from './services/il8nManager'
import { Provider } from './context/index'

addLocaleData(frLocaleData)

class AppWrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locale: "en",
      changeLang: this.changeLang.bind(this)
    }
  }

  changeLang(locale) {
    this.setState({ locale: locale })
  }

  render() {
    return (

      <Provider value={this.state}>
        <IntlProvider locale={this.state.locale} messages={getAllMessages(this.state.locale)}>
          <App />
        </IntlProvider>
      </Provider>
    )
  }
}

export default AppWrapper