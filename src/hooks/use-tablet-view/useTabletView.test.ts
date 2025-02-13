import { useMediaQuery } from '@mantine/hooks';

import { useTabletView } from '@/hooks';

jest.mock('@mantine/hooks', () => ({
  useMediaQuery: jest.fn(),
}));

const useMediaQueryMock = useMediaQuery as jest.Mock;

describe('useTabletMobileView tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if media query matches tablet view', () => {
    useMediaQueryMock.mockReturnValue(true);

    const result = useTabletView();

    expect(result).toBeTruthy();
  });

  it('should return false if media query matches desktop view', () => {
    useMediaQueryMock.mockReturnValue(false);

    const result = useTabletView();

    expect(result).toBeFalsy();
  });
});
