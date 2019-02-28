import React from 'react'
import { shallow, render } from 'enzyme'

import ErrorMessage from "../errorMessage/errorMessage"

describe('ErrorMessage component testing', () => {
  it('should render error message component when error is false',() => {
    expect(shallow(
    <ErrorMessage
      key={0}
      error={false}
    />).contains(
      <div className={'card-panel red lighten-1 fade-in'}>
        An error occured during the creation of the room. Please try again :-)
      </div>
    )).toBe(true)
  })

  it('should render error message component when error is true',() => {
    expect(shallow(
      <ErrorMessage
        key={0}
        error={true}
      />
    ).contains(
      <div className={'card-panel red lighten-1'}>
        An error occured during the creation of the room. Please try again :-)
      </div>
    )).toBe(true)
  })

  it('should be selectable by class "card-panel"',() => {
    expect(shallow(
      <ErrorMessage
        key={0}
        error={false}
      />
    ).is('.card-panel')).toBe(true)
  })

  it('should render to static HTML',() => {
    expect(render(
      <ErrorMessage
       key={0}
       error={false}
      />
    ).text()).toEqual('An error occured during the creation of the room. Please try again :-)')
  })
})
