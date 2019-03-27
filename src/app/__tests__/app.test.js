import React from "react"
import ReactDOM from "react-dom"
import AppWrapper from "../appWrapper"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<AppWrapper />, div)
})
