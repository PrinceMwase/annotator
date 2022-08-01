import { render } from '@redwoodjs/testing/web'

import UposForm from './UposForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UposForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UposForm />)
    }).not.toThrow()
  })
})
