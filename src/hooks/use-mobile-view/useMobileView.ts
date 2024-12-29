import { useMediaQuery } from '@mantine/hooks';

import { THEME_BREAKPOINTS } from '@/constants/breakpoints';

export const useMobileView = () => {
  return useMediaQuery(`(max-width: ${THEME_BREAKPOINTS.sm})`);
};
