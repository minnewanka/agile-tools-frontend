import React from "react"
import { Route } from "react-router-dom"

import DefaultHeader from "../defaultHeader/defaultHeader"
import RoomHeader from "../roomHeader"
import Footer from "../footer/footer"

const Layout = ({ component: Page, roomHeader, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <div>
          {roomHeader ? <RoomHeader /> : <DefaultHeader />}
          <Page />
          <Footer />
        </div>
      )}
    />
  )
}

export default Layout
