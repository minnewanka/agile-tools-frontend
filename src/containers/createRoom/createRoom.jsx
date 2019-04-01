import React, { Component } from "react"
import "./createRoom.scss"
import { Button, Card, Input, Row } from "react-materialize"
import { Link } from "react-router-dom"
import { createRoom } from "../../services/roomService"
import ErrorMessage from "../../common/components/errorMessage"
import Loader from "../../common/components/loader/loader"
import MobileStoreIcon from "../../common/components/mobileStoreIcon"

class CreateRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: "",
      roomCode: "",
      error: false,
      errorServer: false,
      loading: false,
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this)
    this.handleRoomNameFocus = this.handleRoomNameFocus.bind(this)
  }

  handleRoomNameChange = evt => {
    this.setState({ roomName: evt.target.value })
  }

  handleRoomNameFocus = () => {
    this.setState({ error: false })
  }

  redirect = () => {
    const { redirect, roomCode } = this.state
    const { history } = this.props
    if (redirect) {
      history.push({
        pathname: "/room",
        state: { roomCode }
      })
    }
  }

  handleSubmit(evt) {
    const { roomName } = this.state
    if (!roomName || !roomName.trim()) {
      this.setState({ error: true })
      evt.preventDefault()
      return
    }
    this.setState({ loading: true })
    createRoom(roomName).then(
      room => {
        this.setState({
          errorServer: false,
          loading: false,
          redirect: true,
          roomCode: room.get("code")
        })
      },
      error => {
        this.setState({ errorServer: true, loading: false })
        setTimeout(() => {
          this.setState({ errorServer: false })
        }, 5000)
      }
    )
    evt.preventDefault()
  }

  render() {
    const { errorServer, error, loading } = this.state
    const { translate } = this.props
    return (
      <div className="main-container">
        <div className="card-session">
          <ErrorMessage key={0} error={errorServer} />
          <Card
            key={1}
            className="white"
            textClassName="black-text"
            title={translate("title")}
          >
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Input
                  className={error ? "error" : ""}
                  type="text"
                  m={12}
                  s={12}
                  label={translate("inputLabel")}
                  placeholder={translate("inputPlaceholder")}
                  error={error ? translate("fieldEmptyRoom") : ""}
                  validate
                  minLength="3"
                  maxLength="25"
                  data-length="25"
                  onChange={this.handleRoomNameChange}
                  onFocus={this.handleRoomNameFocus}
                />
                <div className={`center-align ${loading ? "loading" : ""}`}>
                  <Button waves="light" className="btn-sii">
                    {translate("buttonCreate")}
                  </Button>
                </div>
                <Loader key={2} loading={loading} />
              </Row>
            </form>
            {this.redirect()}
            <div className="right-align">
              <Link to="/rooms">{translate("redirectLink")}</Link>{" "}
            </div>
          </Card>
        </div>
        <div>
          <div className="store-badge-text center-align">
            <h5>{translate("textMobile")}</h5>
          </div>
          <div className="store-badge-container">
            <MobileStoreIcon />
          </div>
        </div>
      </div>
    )
  }
}
export default CreateRoom
