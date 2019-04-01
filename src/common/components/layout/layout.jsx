import React from "react"
import { Route } from "react-router-dom"

import DefaultHeader from "../defaultHeader"
import RoomHeader from "../roomHeader"
import Footer from "../footer"
import Feedback from "../feedback"

const Layout = ({ component: Page, roomHeader, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <div>
          {roomHeader ? <RoomHeader /> : <DefaultHeader />}
          <Page />
          <Feedback />
          <Footer />
        </div>
      )}
    />
  )
}

export default Layout
