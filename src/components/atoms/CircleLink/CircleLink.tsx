import styles from './CircleLink.module.scss';

interface Props {
  link: string;
  icon: JSX.Element;
}

export const CircleLink = ({ link, icon }: Props) => {
  return (
    <a href={link} className={styles.link}>
      {icon}
    </a>
  );
};
