import React from "react"
import { Modal, Row, Input, Button } from "react-materialize"
import "./contactUs.scss"

const ContactUs = ({ translate }) => {
  return (
    <Modal
      header={translate("contact")}
      className="contact-us-container"
      trigger={(
<button type="button" className="contact-us-btn button-noStyle">
          {translate("contact")}
        </button>
)}
      actions={(
<div className="actions-buttons-container">
          <Button
            flat
            modal="close"
            waves="light"
            className="actions-button-cancel"
          >
            {translate("btn.cancel")}
          </Button>
          <Button waves="light" className="btn-sii">
            {translate("btn.send")}
          </Button>
        </div>
)}
    >
      <Row>
        <Input s={6} label={translate("firstname")} />
        <Input s={6} label={translate("lastname")} />
        <Input s={6} label={translate("company")} />
        <Input type="email" label={translate("email")} s={12} />
        <Input
          label={translate("comments")}
          type="textarea"
          // placeholder="Décrivez votre problème ou partagez vos idées"
          s={12}
        />
      </Row>
    </Modal>
  )
}

export default ContactUs
