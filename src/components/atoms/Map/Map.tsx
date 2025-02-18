'use client';
import styles from './Map.module.scss';

interface Props {
  height: string;
  src: string;
}

export const Map = ({ height, src }: Props) => {
  return (
    <iframe data-testid="map-iframe" className={styles.iframe} height={height} src={src}></iframe>
  );
};
