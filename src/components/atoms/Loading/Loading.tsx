import { Loader } from '@mantine/core';

import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div data-testid="loading-component" className={styles.wrapper}>
      <Loader color="brand" size="lg" />
    </div>
  );
}
