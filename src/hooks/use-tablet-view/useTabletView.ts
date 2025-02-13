import { useMediaQuery } from '@mantine/hooks';

import { THEME_BREAKPOINTS } from '@/constants/breakpoints';

export const useTabletView = () => {
  return useMediaQuery(
    `(min-width: ${THEME_BREAKPOINTS.sm}) and (max-width: ${THEME_BREAKPOINTS.lg})`,
  );
};
