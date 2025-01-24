import styles from './Description.module.scss';

export interface Props {
  children: React.ReactNode;
}

export default function Description({ children }: Props) {
  return <div className={styles.description}>{children}</div>;
}
