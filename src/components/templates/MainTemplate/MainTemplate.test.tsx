import { render, screen } from '@testing-library/react'
import MainTemplate from './MainTemplate.tsx'
import '@testing-library/jest-dom'

test('renders App component', () => {
  render(<MainTemplate>Content</MainTemplate>)

  expect(screen.getByText('Content')).toBeInTheDocument()
})
