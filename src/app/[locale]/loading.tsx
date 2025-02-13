import Loading from '@/components/atoms/Loading/Loading';

import styles from './loading.module.scss';

export default function LoadingLayout() {
  return (
    <div className={styles.wrapper}>
      <Loading />
    </div>
  );
}
