import React from 'react'
import './errorMessage.scss'

const ErrorMessage = ({ error, translate }) => {
  const classNameMessageError = 'card-panel red lighten-1'
  return (
    <div
      className={
        !error ? `${classNameMessageError} fade-in` : classNameMessageError
      }
    >
      {translate('backend.connexion')}
    </div>
  )
}
export default ErrorMessage
