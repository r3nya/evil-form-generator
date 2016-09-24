import React from 'react'
import { shallow } from 'enzyme'
import { Alert } from 'components/uiToolkit'

describe('Components > uiToolkit > Alert', () => {
  it('renders w/o chash', () => {
    const wrapper = shallow(<Alert message="Hello" />)
    expect(wrapper.contains('Hello')).toEqual(true)
  })
})
