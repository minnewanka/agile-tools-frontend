import React, { Component } from 'react'
import { Modal, Row, Input, Button } from 'react-materialize'
import './feedback.scss'
import Parse from 'parse'

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      company: '',
      subject: 'COMMENT',
      message: '',
      errors: [],
      isSent: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.sendFeedback = this.sendFeedback.bind(this)
    this.reset = this.reset.bind(this)
  }

  sendFeedback = () => {
    Parse.Cloud.run('sendFeedback', this.state)
  }

  reset() {
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      company: '',
      subject: 'COMMENT',
      message: '',
      errors: [],
      isSent: false
    })
  }

  handleSubmit() {
    const { errors } = this.state
    this.handleValidation()
    if (errors.length <= 0) {
      this.sendFeedback()
      this.setState({ isSent: true })

      setTimeout(() => {
        /* Only way to programmaly close modal for now
    see https://react-materialize.github.io/#/modals */
        /* eslint-disable no-undef */
        $(`#feedbackModal`).modal('close')
        /* eslint-enable no-undef */
        this.reset()
      }, 1250)
    }
  }

  handleInputFocus(event) {
    const { errors } = this.state
    const { target } = event
    const { name } = target
    if (errors.includes(name)) {
      const filtered = errors.filter(error => error !== name)
      this.setState({ errors: filtered })
    }
  }

  handleValidation() {
    const { errors, firstname, lastname, email, message } = this.state
    if (!firstname && !errors.includes('firstname')) errors.push('firstname')
    if (!lastname && !errors.includes('lastname')) errors.push('lastname')
    if (!email && !errors.includes('email')) errors.push('email')
    if (!message && !errors.includes('message')) errors.push('message')

    this.setState({ errors })
  }

  handleInputChange(event) {
    const { target } = event
    const { name } = target
    this.setState({
      [name]: target.value
    })
  }

  render() {
    const { translate } = this.props
    const {
      firstname,
      lastname,
      email,
      company,
      message,
      errors,
      isSent
    } = this.state
    let thankyouMessage
    if (isSent) {
      thankyouMessage = (
        <div className="thankyou-container">
          <p>{translate('thankyou')}</p>
        </div>
      )
    }

    return (
      <Modal
        id="feedbackModal"
        header={translate('contact')}
        className="feedback-us-container"
        modalOptions={{ dismissible: false }}
        trigger={
          <button type="button" className="feedback-us-btn">
            {translate('triggerbtn')}
          </button>
        }
        actions={
          <div className="actions-buttons-container">
            <Button
              flat
              modal="close"
              waves="light"
              className="actions-button-cancel"
              onClick={this.reset}
            >
              {translate('btn.cancel')}
            </Button>
            <Button
              waves="light"
              className="btn-sii"
              onClick={this.handleSubmit}
            >
              {translate('btn.send')}
            </Button>
          </div>
        }
      >
        <Row className="feedback-form-container">
          <Input
            name="firstname"
            required
            s={6}
            label={translate('firstname')}
            value={firstname}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className={errors.includes('firstname') ? 'error' : ''}
            error={
              errors.includes('firstname') ? translate('fieldRequired') : ''
            }
          />
          <Input
            name="lastname"
            s={6}
            label={translate('lastname')}
            value={lastname}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className={errors.includes('lastname') ? 'error' : ''}
            error={
              errors.includes('lastname') ? translate('fieldRequired') : ''
            }
          />
          <Input
            name="email"
            type="email"
            label={translate('email')}
            value={email}
            s={6}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className={errors.includes('email') ? 'error' : ''}
            error={errors.includes('email') ? translate('fieldRequired') : ''}
          />
          <Input
            name="company"
            s={6}
            label={translate('company')}
            value={company}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            className={errors.includes('company') ? 'error' : ''}
            error={errors.includes('company') ? translate('fieldRequired') : ''}
          />
        </Row>
        <Row>
          <div className="comment-section">
            <select className="selectionType" onChange={this.handleInputChange}>
              <option value="COMMENT">{translate('comment')}</option>
              <option value="BUG">{translate('bug')}</option>
            </select>
            <Input
              name="message"
              label={translate('message')}
              type="textarea"
              value={message}
              s={12}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              className={errors.includes('message') ? 'error' : ''}
              error={
                errors.includes('message') ? translate('fieldRequired') : ''
              }
            />
          </div>
        </Row>
        {thankyouMessage}
        <Row />
      </Modal>
    )
  }
}

export default Feedback
