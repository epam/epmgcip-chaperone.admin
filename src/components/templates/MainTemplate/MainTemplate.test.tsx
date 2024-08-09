import { render, screen } from '@testing-library/react'
import MainTemplate from './MainTemplate.tsx'
import '@testing-library/jest-dom'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      store: {
        data: {
          en: {
            flag: '',
          },
          ru: {
            flag: '',
          },
        },
      },
    },
  }),
}))

test('renders App component', () => {
  render(<MainTemplate>Content</MainTemplate>)

  expect(screen.getByText('Content')).toBeInTheDocument()
})
