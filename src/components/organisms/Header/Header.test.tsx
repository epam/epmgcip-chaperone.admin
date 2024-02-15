import { render, screen } from '@testing-library/react'
import Header from './Header.tsx'
import '@testing-library/jest-dom'

describe('Header', () => {
  test('renders', () => {
    render(<Header />)

    expect(screen.getByTestId('header-component')).toBeInTheDocument()
  })
})
