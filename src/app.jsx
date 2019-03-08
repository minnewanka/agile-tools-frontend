import React from "react"
import Routes from './components/routing'
import Parse from 'parse'
import { injectIntl } from "react-intl"

Parse.initialize("SIIAG")
Parse.serverURL = 'https://sii-agile-tools.herokuapp.com/parse'

class App extends React.Component {

  render() {
    return(
        <div className="App">
          <Routes />
        </div>
   
    )
  }
}

export default injectIntl(App)
