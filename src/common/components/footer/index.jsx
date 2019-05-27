import React from 'react'
import { withRouter } from 'react-router-dom'
import Footer from './footer'
import { Consumer } from '../../../context'

const FooterConsumer = props => (
  <Consumer>
    {({ locale, formatMessage }) => (
      <Footer translate={formatMessage('privacy')} locale={locale} {...props} />
    )}
  </Consumer>
)

export default withRouter(FooterConsumer)
