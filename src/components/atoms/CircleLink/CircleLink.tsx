import styles from './CircleLink.module.scss';

interface Props {
  link: string;
  icon: JSX.Element;
}

export default function CircleLink({ link, icon }: Props) {
  return (
    <a href={link} className={styles.link}>
      {icon}
    </a>
  );
}
