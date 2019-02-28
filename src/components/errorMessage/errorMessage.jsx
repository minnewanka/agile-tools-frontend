import React from 'react'
import './errorMessage.scss'
import PropTypes from 'prop-types'

const ErrorMessage = ({error}) => {

    const classNameMessageError = "card-panel red lighten-1"
    return (
      <div className={!error ? classNameMessageError + ' fade-in' : classNameMessageError}>
        An error occured during the creation of the room. Please try again :-)
      </div>
    )
  
}

export default ErrorMessage

ErrorMessage.propTypes = {
  error: PropTypes.bool
}
ErrorMessage.defaultProps = {
  error: false
}