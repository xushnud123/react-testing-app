import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe('Greet', () => {
  test('greet component testing', () => {
    render(<Greet />)
    const textElement = screen.getByText('Greet')
    expect(textElement).toBeInTheDocument()
  })
})

test('greet component testing', () => {
  render(<Greet />)
  const textElement = screen.getByText('Greet')
  expect(textElement).toBeInTheDocument()
})
