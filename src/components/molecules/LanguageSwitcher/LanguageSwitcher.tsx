import { useTranslation } from 'react-i18next'
import Dropdown from '../../atoms/Dropdown/Dropdown.tsx'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('i18nextLng', lng)
  }

  const options = Object.entries(i18n.store.data).map(([lang, data]) => ({
    id: lang,
    text: lang,
    image: data.flag as string,
  }))

  return (
    <Dropdown
      options={options}
      defaultOptionId={i18n.language}
      onChange={(optionId) => changeLanguage(optionId)}
    />
  )
}
