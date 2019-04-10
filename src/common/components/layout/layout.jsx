import React from 'react'
import { Route } from 'react-router-dom'

import Footer from '../footer'
import Feedback from '../feedback'

const Layout = ({ component: Page, roomHeader, ...rest }) => {
  return <Route {...rest} render={() => [<Page />, <Feedback />, <Footer />]} />
}

export default Layout
