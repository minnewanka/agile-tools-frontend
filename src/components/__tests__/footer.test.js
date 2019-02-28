import React from 'react'
import { shallow, mount, render } from 'enzyme'

import FooterApp from "../footer/footer"
import { Footer } from 'react-materialize'

describe('FooterApp component testing', () => {
  it('should render footer whitout throwing error', () => {
    expect(shallow(
    <FooterApp/>
    ).contains(
      <Footer copyrights="Copyright 2019 SII Canada | All Rights Reserved" className='footer-copyright' />
    )).toBe(true)
  })

  it('should render to static HTML', () => {
    expect(render(
      <FooterApp/>
    ).text()).toEqual('Copyright 2019 SII Canada | All Rights Reserved')
  })
})