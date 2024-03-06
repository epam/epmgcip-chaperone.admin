import { render } from '@testing-library/react'
import Player from './Player.tsx'
import '@testing-library/jest-dom'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => 'Play audioguide',
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}))

describe('Player', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(<Player url='' />)

    expect(getByText('Play audioguide')).toBeInTheDocument()
  })
})
