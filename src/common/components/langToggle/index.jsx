import React from "react"
import LangToggle from "./langToggle"
import { Consumer } from "../../../context"

const LangToggleConsumer = () => (
  <Consumer>
    {({ locale, changeLang }) => (
      <LangToggle locale={locale} changeLang={changeLang} />
    )}
  </Consumer>
)

export default LangToggleConsumer
