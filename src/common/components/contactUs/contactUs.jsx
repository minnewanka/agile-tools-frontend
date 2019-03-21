import React, { Component } from "react"
import { Modal, Row, Input, Button } from "react-materialize"
import "./contactUs.scss"
import Parse from "parse"

class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.sendFeedback = this.sendFeedback.bind(this)
  }

  sendFeedback = () => {
    Parse.Cloud.run("sendFeedback", this.state)
  }

  handleInputChange(event) {
    const { target } = event
    const { name } = target
    const value = target.type === "checkbox" ? target.checked : target.value
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  render() {
    const { translate } = this.props
    return (
      <Modal
        header={translate("contact")}
        className="contact-us-container"
        trigger={
          <button type="button" className="contact-us-btn button-noStyle">
            {translate("contact")}
          </button>
        }
        actions={
          <div className="actions-buttons-container">
            <Button
              flat
              modal="close"
              waves="light"
              className="actions-button-cancel"
            >
              {translate("btn.cancel")}
            </Button>
            <Button
              modal="close"
              waves="light"
              className="btn-sii"
              onClick={this.sendFeedback}
            >
              {translate("btn.send")}
            </Button>
          </div>
        }
      >
        <Row>
          <Input
            name="firstname"
            s={6}
            label={translate("firstname")}
            onChange={this.handleInputChange}
          />
          <Input
            name="lastname"
            s={6}
            label={translate("lastname")}
            onChange={this.handleInputChange}
          />
          <Input
            name="email"
            type="email"
            label={translate("email")}
            s={6}
            onChange={this.handleInputChange}
          />
          <Input
            name="company"
            s={6}
            label={translate("company")}
            onChange={this.handleInputChange}
          />
        </Row>
        <Row>
          <div className="comment-section">
            <Input
              name="subject"
              className="subject"
              type="select"
              label={translate("subject")}
              defaultValue={translate("comment")}
              s={3}
              onChange={this.handleInputChange}
            >
              <option value="comment">{translate("comment")}</option>
              <option value="bug">{translate("bug")}</option>
            </Input>
            <Input
              name="message"
              label={translate("message")}
              type="textarea"
              s={12}
              onChange={this.handleInputChange}
            />
          </div>
        </Row>
      </Modal>
    )
  }
}

export default ContactUs
