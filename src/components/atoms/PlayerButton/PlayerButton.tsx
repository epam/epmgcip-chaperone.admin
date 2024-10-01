import styles from "./PlayerButton.module.scss";

export interface Props {
  icon: React.ElementType;
  text?: string;
}

export default function PlayerButton({ icon: Icon, text }: Props) {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} /> {text && <span className={styles.text}>{text}</span>}
    </div>
  );
}
