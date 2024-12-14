import { em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const smMobileViewMaxWidth = 768;

export const useMobileView = () => {
  return useMediaQuery(`(max-width: ${em(smMobileViewMaxWidth)})`);
};
