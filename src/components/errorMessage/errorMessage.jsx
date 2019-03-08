import React from 'react'
import './errorMessage.scss'
import PropTypes from 'prop-types'
import { injectIntl, defineMessages } from "react-intl"

const messages = defineMessages({
  backendError: {
    id: 'backend.connexion.errorMessage',
    defaultMessage: 'An error occured during the creation of the room. Please try again :-'
  }
})

const ErrorMessage = ({error,intl: { formatMessage }}) => {

    const classNameMessageError = "card-panel red lighten-1"
    return (
      <div className={!error ? classNameMessageError + ' fade-in' : classNameMessageError}>
        {formatMessage(messages.backendError)}
      </div>
    )
  
}

export default injectIntl(ErrorMessage)

ErrorMessage.propTypes = {
  error: PropTypes.bool
}
ErrorMessage.defaultProps = {
  error: false
}