import DOMPurify from 'dompurify'
import styles from './Error.module.scss'

interface Props {
  message: string
}

export default function Error({ message }: Props) {
  return (
    <div
      className={styles.error}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }}
    />
  )
}
