import { useTranslation } from 'react-i18next'
import EnFlag from '../../../assets/images/EN.png'
import RuFlag from '../../../assets/images/RU.png'
import UzFlag from '../../../assets/images/UZ.png'
import KaFlag from '../../../assets/images/KA.png'
import Dropdown from '../../atoms/Dropdown/Dropdown.tsx'
import {
  ENGLISH_LANGUAGE_CODE,
  KARAKALPAK_LANGUAGE_CODE,
  RUSSIAN_LANGUAGE_CODE,
  UZBEK_LANGUAGE_CODE,
} from '../../../constants/languages.ts'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('i18nextLng', lng)
  }

  return (
    <Dropdown
      options={[
        {
          id: ENGLISH_LANGUAGE_CODE,
          text: ENGLISH_LANGUAGE_CODE,
          image: EnFlag,
        },
        { id: UZBEK_LANGUAGE_CODE, text: UZBEK_LANGUAGE_CODE, image: UzFlag },
        {
          id: RUSSIAN_LANGUAGE_CODE,
          text: RUSSIAN_LANGUAGE_CODE,
          image: RuFlag,
        },
        {
          id: KARAKALPAK_LANGUAGE_CODE,
          text: KARAKALPAK_LANGUAGE_CODE,
          image: KaFlag,
        },
      ]}
      defaultOptionId={i18n.language}
      onChange={(optionId) => changeLanguage(optionId)}
    />
  )
}
