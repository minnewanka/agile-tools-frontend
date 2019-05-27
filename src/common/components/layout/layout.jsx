import React from 'react'
import { Route } from 'react-router-dom'

import DefaultHeader from '../defaultHeader'
import Footer from '../footer'
import Feedback from '../feedback'

const Layout = ({ component: Page, noHeader, headerStyled, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <>
          {noHeader ? null : <DefaultHeader headerStyled />}
          <Page key="page" />
          <Feedback key="feedback" />
          <Footer key="footer" />
        </>
      )}
    />
  )
}

export default Layout
