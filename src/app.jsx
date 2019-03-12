import React from "react"
import Parse from 'parse'
import Routes from './components/routing/routing'

Parse.initialize("SIIAG")
Parse.serverURL = 'https://sii-agile-tools.herokuapp.com/parse'

const App = () => (
  <div className="App">
    <Routes />
  </div>
)

export default App
