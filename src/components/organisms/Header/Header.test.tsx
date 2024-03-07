import { render, screen } from '@testing-library/react'
import Header from './Header.tsx'
import '@testing-library/jest-dom'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}))

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    expect(screen.getByTestId('header-component')).toBeInTheDocument()
  })
})
