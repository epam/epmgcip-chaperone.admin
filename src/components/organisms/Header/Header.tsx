import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import logo from '../../../assets/images/logo.png'
import LanguageSwitcher from '../../molecules/LanguageSwitcher/LanguageSwitcher.tsx'

export default function Header() {
  const { t } = useTranslation()
  return (
    <div className={styles.header} data-testid='header-component'>
      <img className={styles.logo} src={logo} alt={t('logo')} />
      <LanguageSwitcher />
    </div>
  )
}
