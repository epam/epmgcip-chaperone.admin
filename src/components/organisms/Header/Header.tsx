import styles from './Header.module.scss'
import logo from '../../../assets/logo.png'
import Dropdown from '../../atoms/Dropdown/Dropdown.tsx'

export default function Header() {
  return (
    <div className={styles.header} data-testid='header-component'>
      <img className={styles.logo} src={logo} alt='logo' />
      <Dropdown />
    </div>
  )
}
