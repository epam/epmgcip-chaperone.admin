import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div data-testid="loading-component" className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  );
}
