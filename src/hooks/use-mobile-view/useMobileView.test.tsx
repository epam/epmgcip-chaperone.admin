import { useMediaQuery } from '@mantine/hooks';

import { useMobileView } from '@/hooks';

jest.mock('@mantine/hooks', () => ({
  useMediaQuery: jest.fn(),
}));

const useMediaQueryMock = useMediaQuery as jest.Mock;

describe('useMobileView tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if media query matches mobile view', () => {
    useMediaQueryMock.mockReturnValue(true);

    const result = useMobileView();

    expect(result).toBeTruthy();
  });

  it('should return false if media query matches desktop view', () => {
    useMediaQueryMock.mockReturnValue(false);

    const result = useMobileView();

    expect(result).toBeFalsy();
  });
});
