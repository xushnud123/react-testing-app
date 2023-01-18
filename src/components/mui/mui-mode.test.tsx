import { render, screen } from '../../utils/test-utils'
import { MuiMode } from './mui-mode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
