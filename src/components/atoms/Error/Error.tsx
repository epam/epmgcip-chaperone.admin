import styles from './Error.module.scss'

interface Props {
  message: string
}

export default function Error({ message }: Props) {
  return <div className={styles.error}>{message}</div>
}
