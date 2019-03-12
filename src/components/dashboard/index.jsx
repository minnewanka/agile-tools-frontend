import React from "react"
import Dashboard from "./dashboard"
import { Consumer } from "../../context"

const DashboardConsumer = props => {
  return (
    <Consumer>
      {({ formatMessage }) => (
        <Dashboard translate={formatMessage("dashboard")} {...props} />
      )}
    </Consumer>
  )
}

export default DashboardConsumer
