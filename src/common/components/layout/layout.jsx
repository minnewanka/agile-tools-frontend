import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = ({ component: Page, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <div>
          <Header />
          <Page />
          <Footer />
        </div>
      )}
    />
  )
}

export default Layout
