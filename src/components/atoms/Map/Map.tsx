'use client';
import styles from './Map.module.scss';

interface Props {
  height: string;
}

export const Map = ({ height }: Props) => {
  return (
    <iframe
      data-testid="map-iframe"
      className={styles.iframe}
      height={height}
      src={process.env.EMBED_MAP_SRC}
    ></iframe>
  );
};
