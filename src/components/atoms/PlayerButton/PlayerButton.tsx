import styles from "./PlayerButton.module.scss";

export interface Props {
  iconUrl: string;
  iconAlt: string;
  text?: string;
}

export default function PlayerButton({ iconUrl, iconAlt, text }: Props) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={iconUrl} alt={iconAlt} />{" "}
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
}
