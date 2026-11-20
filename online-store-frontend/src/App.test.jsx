import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders the heading correctly', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /hiiiiii/i })
    ).toBeInTheDocument()
  })
})
