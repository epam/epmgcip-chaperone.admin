import { useTranslation } from 'react-i18next'
import { useState, useEffect, useCallback } from 'react'
import styles from './Dropdown.module.scss'
import EnFlag from '../../../assets/EN.png'
import RuFlag from '../../../assets/RU.png'
import arrow from '../../../assets/arrow.svg'

export default function Dropdown() {
  const { i18n } = useTranslation()
  const [flagImage, setFlagImage] = useState(
    i18n.language === 'en' ? EnFlag : RuFlag,
  )
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  const changeLanguage = useCallback(
    (lng: string | undefined) => {
      i18n.changeLanguage(lng)
      setSelectedLanguage(lng || 'en')
      setFlagImage(lng === 'en' ? EnFlag : RuFlag)

      localStorage.setItem('selectedLanguage', lng || 'en')
    },
    [i18n],
  )

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage')
    if (storedLanguage && storedLanguage !== selectedLanguage) {
      changeLanguage(storedLanguage)
    }
  }, [changeLanguage, selectedLanguage])

  return (
    <div className={styles.select_wrapper}>
      <select
        className={styles.select}
        onChange={(e) => changeLanguage(e.target.value)}
        value={selectedLanguage}
        style={{ backgroundImage: `url(${flagImage})` }}
      >
        <option value='en' style={{ backgroundImage: `url(${EnFlag})` }}>
          EN
        </option>
        <option value='ru' style={{ backgroundImage: `url(${RuFlag})` }}>
          RU
        </option>
      </select>
      <img className={styles.arrow} src={arrow} alt='arrow' />
    </div>
  )
}
