import Image from 'next/image';

import styles from './DescriptionImage.module.scss';

export interface Props {
  url: string;
  title: string;
  height: number;
  width: number;
}

export default function DescriptionImage({ url, title, height, width }: Props) {
  return (
    <div className={styles.wrapper}>
      <Image src={url} alt={title} height={height} width={width} />
    </div>
  );
}
