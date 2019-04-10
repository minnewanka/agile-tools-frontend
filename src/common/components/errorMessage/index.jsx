import React from "react"
import ErrorMessage from "./errorMessage"
import { Consumer } from "../../../context"

const ErrorMessageConsumer = props => (
  <Consumer>
    {({ formatMessage }) => (
      <ErrorMessage translate={formatMessage("errorMessage")} {...props} />
    )}
  </Consumer>
)

export default ErrorMessageConsumer
