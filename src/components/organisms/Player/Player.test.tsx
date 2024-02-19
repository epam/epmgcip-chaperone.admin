import { render } from '@testing-library/react'
import Player from './Player.tsx'
import '@testing-library/jest-dom'

describe('Player', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(<Player url='' />)

    expect(getByText('Play audioguide')).toBeInTheDocument()
  })
})
