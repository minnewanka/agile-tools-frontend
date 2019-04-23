import React from 'react'
import LangToggle from './langToggle'
import { Consumer } from '../../../context'

const LangToggleConsumer = props => (
  <Consumer>
    {({ locale, changeLang }) => (
      <LangToggle locale={locale} changeLang={changeLang} {...props} />
    )}
  </Consumer>
)

export default LangToggleConsumer
