import { render } from '@redwoodjs/testing/web'

import Subject from './Subject'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Subject', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Subject />)
    }).not.toThrow()
  })
})
