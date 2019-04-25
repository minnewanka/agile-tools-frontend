import React from 'react'
import './errorMessage.scss'

const ErrorMessage = ({ message, translate }) => {
  const classNameMessageError = 'card-panel red lighten-1'
  return (
    <div
      className={
        !message ? `${classNameMessageError} fade-in` : classNameMessageError
      }
    >
      {translate(message)}
    </div>
  )
}
export default ErrorMessage
