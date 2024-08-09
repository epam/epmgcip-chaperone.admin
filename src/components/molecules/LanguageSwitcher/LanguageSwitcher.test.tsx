import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.tsx'

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    i18n: {
      language: 'en',
      changeLanguage: jest.fn(),
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

Storage.prototype.setItem = jest.fn()

describe('LanguageSwitcher', () => {
  it('displays the current language', () => {
    const { getByText } = render(<LanguageSwitcher />)
    expect(getByText('en')).toBeInTheDocument()
  })

  it('changes the language when a new option is clicked', () => {
    const { getByText } = render(<LanguageSwitcher />)
    const button = getByText('en')
    fireEvent.click(button)
    const option = getByText('ru')
    fireEvent.click(option)
    expect(useTranslation().i18n.changeLanguage).toHaveBeenCalledWith('ru')
  })

  it('stores the new language in localStorage', () => {
    const { getByText } = render(<LanguageSwitcher />)
    const button = getByText('en')
    fireEvent.click(button)
    const option = getByText('ru')
    fireEvent.click(option)
    expect(localStorage.setItem).toHaveBeenCalledWith('i18nextLng', 'ru')
  })
})
