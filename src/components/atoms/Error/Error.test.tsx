import { render, screen } from '@testing-library/react'
import Error from './Error.tsx'
import '@testing-library/jest-dom'

describe('Error', () => {
  it('renders', () => {
    render(<Error message='Not Found' />)

    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })
})
