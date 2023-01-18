import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Counter } from './counter'

describe('counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of a', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent(/0/i)

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('button bosilganda state yangilanishini test qilamiz', async () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })

    await userEvent.click(incrementButton)
    expect(countElement).toHaveTextContent('1')
  })

  test('button 2 marta bosilganda state yangilanishini test qilamiz', async () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })

    await userEvent.dblClick(incrementButton)
    expect(countElement).toHaveTextContent('2')
  })
  test("inputga 10 kiritilishi va set button bosilganda amount 10 bo'lishini tekshirish", async () => {
    userEvent.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const countElement = screen.getByRole('heading')

    await userEvent.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    await userEvent.click(setButton)
    expect(countElement).toHaveTextContent('10')
  })
  test('focused', async () => {
    userEvent.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await userEvent.tab()
    expect(incrementButton).toHaveFocus()
    await userEvent.tab()
    expect(amountInput).toHaveFocus()
    await userEvent.tab()
    expect(setButton).toHaveFocus()
  })
})
