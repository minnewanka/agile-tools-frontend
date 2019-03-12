import React from "react"
import "./errorMessage.scss"
import { Consumer } from "../../context"

const ErrorMessage = ({ error }) => {
  const classNameMessageError = "card-panel red lighten-1"
  return (
    <Consumer>
      {({ messages }) => {
        const translate = (key, prefix = "errorMessage") =>
          messages[`${prefix}.${key}`]
        return (
          <div
            className={
              !error
                ? `${classNameMessageError} fade-in`
                : classNameMessageError
            }
          >
            {translate("backend.connexion")}
          </div>
        )
      }}
    </Consumer>
  )
}

export default ErrorMessage
