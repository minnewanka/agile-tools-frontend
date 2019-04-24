import React from 'react'
import { Input, Row } from 'react-materialize'
// import { Link } from 'react-router-dom'
import ErrorMessage from '../../../../common/components/errorMessage'
import Loader from '../../../../common/components/loader/loader'
import './roomForm.scss'
import { Consumer } from '../../../../context'

const RoomForm = props => {
  const {
    inputData,
    handleSubmit,
    handleInputChange,
    handleFocus,
    error,
    errorServer,
    loading
  } = props

  return (
    <Consumer>
      {({ formatMessage, homePageFormType, toggleHomePageFormType }) => {
        const translate = formatMessage('roomForm')
        return (
          <>
            <ErrorMessage key={0} message={errorServer} />
            <div className="room-card">
              <h3 className="title">{translate(inputData.title)}</h3>
              <form
                className="room-form"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Row>
                  <Input
                    className={`input ${error ? 'error' : ''}`}
                    type="text"
                    m={12}
                    s={12}
                    label=" "
                    placeholder={error ? '' : translate(inputData.placeHolder)}
                    error={error ? translate(inputData.errorMessage) : ''}
                    validate
                    minLength={translate(inputData.minLength)}
                    maxLength={translate(inputData.maxLength)}
                    data-length={translate(inputData.maxLength)}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                  />
                  <div className={`center-align ${loading ? 'loading' : ''}`}>
                    <button
                      type="submit"
                      className="button-default-style btn-create"
                    >
                      {translate(inputData.btnLabel)}
                    </button>
                  </div>
                  <Loader key={2} loading={loading} />
                </Row>
              </form>
              <button
                type="button"
                className="button-noStyle"
                onClick={toggleHomePageFormType}
              >
                {homePageFormType === 'create'
                  ? translate('create.redirectLink')
                  : translate('get.redirectLink')}
              </button>
            </div>
          </>
        )
      }}
    </Consumer>
  )
}
export default RoomForm
