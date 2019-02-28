import React from "react"
import Routes from './components/routing'
import Parse from 'parse'

Parse.initialize("SIIAG")
Parse.serverURL = 'https://sii-agile-tools.herokuapp.com/parse'

const App = () => {
    return (
      <div className="App">
        <Routes />
      </div>
    )
}

export default App
