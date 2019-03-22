import React from "react"
import Parse from "parse"
import Routes from "../common/components/routing/routing"
import "./app.scss"
import "../common/sass/style.scss"

Parse.initialize("SIIAG")
Parse.serverURL = "http://localhost:1337/parse"

const App = () => (
  <div className="App">
    <Routes />
  </div>
)

export default App
