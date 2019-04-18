import React from 'react'
import Parse from 'parse'
import Routes from '../common/components/routing/routing'
import './app.scss'
import '../common/sass/style.scss'

Parse.initialize(process.env.REACT_APP_APP_ID)
Parse.serverURL = process.env.REACT_APP_PARSE_SERVER

const App = () => (
  <div className="App">
    <Routes />
  </div>
)

export default App
