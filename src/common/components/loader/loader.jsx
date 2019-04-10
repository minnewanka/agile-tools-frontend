import React from "react"
import "./loader.scss"
import { Col, Preloader, Row } from "react-materialize"

const Loader = ({ loading }) => {
  const classNameLoader = "loader"
  return (
    <Row>
      <Col
        s={12}
        className={loading ? `${classNameLoader} loading` : classNameLoader}
      >
        <Preloader size="small" />
      </Col>
    </Row>
  )
}

export default Loader
