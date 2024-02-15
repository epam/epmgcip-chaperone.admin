import styles from './Header.module.scss'
import logo from '../../../assets/logo.png'

export default function Header() {
  return (
    <div className={styles.header} data-testid='header-component'>
      <img className={styles.logo} src={logo} alt='logo' />
    </div>
  )
}
