import React from 'react'
import { shallow, mount } from 'enzyme'

import { Col, Preloader, Row } from 'react-materialize'
import Loader from '../loader/loader'

describe('Loader component testing', () => {
  it('should render the loader with the value of class is "loader" only when loading is false', () => {
    expect(shallow(
      <Loader key={0} loading={false} />
      ).contains(
        <Row>
          <Col s={12} className='loader'>
            <Preloader size='small' />
          </Col>
        </Row>
      )).toBe(true)
  })

  it('should render the loader with the value of class is "loader loading" when loading is true', () => {
    expect(shallow(
      <Loader key={0} loading />
      ).contains(
        <Row>
          <Col s={12} className='loader loading'>
            <Preloader size='small' />
          </Col>
        </Row>
      )).toBe(true)
  })
})