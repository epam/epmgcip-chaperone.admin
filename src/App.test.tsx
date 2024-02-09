import { render, screen } from '@testing-library/react'
import App from './App.tsx'
import '@testing-library/jest-dom'

test('renders App component', () => {
  render(<App />)

  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})
