import { render } from '@redwoodjs/testing/web'

import MlLayout from './MlLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MlLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MlLayout />)
    }).not.toThrow()
  })
})
