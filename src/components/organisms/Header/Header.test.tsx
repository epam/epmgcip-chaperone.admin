import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import { useMobileView } from '@/hooks/use-mobile-view';
import { ILink } from '@/interfaces/ILink';

import Header from './Header';

jest.mock('@/navigation', () => ({
  Link: jest.fn().mockReturnValue(<img src={'/test'} alt={'test'} />),
  usePathname: jest.fn().mockReturnValue('/test'),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}));

jest.mock('@/hooks', () => ({
  useMobileView: jest.fn().mockReturnValue(false),
}));

const testRoutes: ILink[] = [
  {
    isEnabled: true,
    label: 'Home',
    url: '/',
  },
  {
    isEnabled: true,
    label: 'Features',
    subLinks: [
      {
        isEnabled: true,
        label: 'Museum',
        url: '/features/museum',
      },
      {
        isEnabled: true,
        label: 'Architecture',
        url: '/features/architecture',
      },
    ],
  },
];

describe('Header', () => {
  const renderComponent = (isMobile: boolean, links: ILink[]) => {
    (useMobileView as jest.Mock).mockReturnValue(isMobile);

    return (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Header links={links} />
      </NextIntlClientProvider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component with related active links in desktop view', () => {
    renderComponent(false, testRoutes);

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });
});
