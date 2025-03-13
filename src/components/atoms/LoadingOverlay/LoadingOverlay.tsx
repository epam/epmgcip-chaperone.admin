import { LoadingOverlay } from '@mantine/core';

import Loading from '../Loading/Loading';

interface Props {
  visible: boolean;
}

export default function LoadingOverlayComponent({ visible }: Props) {
  return (
    <LoadingOverlay
      visible={visible}
      zIndex={1000}
      overlayProps={{ blur: 2, radius: 'sm' }}
      loaderProps={{ children: <Loading /> }}
    />
  );
}
