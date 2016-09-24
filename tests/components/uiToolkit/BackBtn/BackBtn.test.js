import React from 'react'
import { mount } from 'enzyme'
import { BackBtn } from 'components/uiToolkit'

describe('Components > uiToolkit > BackBtn', () => {
  const wrapper = mount(<BackBtn to="backUrl" />)

  it('we have a link', () => {
    expect(wrapper.find('a').length).toBe(1)
  })

  it('we have a title', () => {
    expect(wrapper.text()).toEqual(' Back')
  })

  it('we have the url', () => {
    expect(wrapper.props().to).toEqual('backUrl')
  })

  it('icon left', () => {
    expect(wrapper.find('i.fa.fa-chevron-left').length).toBe(1)
  })

  it('check aria role', () => {
    expect(wrapper.find('[role="link"]').length).toBe(1)
  })
})
