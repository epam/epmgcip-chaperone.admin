import React from 'react';

import '@testing-library/jest-dom';

import { MantineProvider } from '@mantine/core';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import { RouteLabelsEnum } from '@/enums';
import { useMobileView } from '@/hooks/use-mobile-view';
import { ILink } from '@/interfaces/ILink';

import Header from './Header';

jest.mock('@/navigation', () => ({
  __esModule: true,
  ...jest.requireActual('@/navigation'),
  usePathname: jest.fn().mockReturnValue('/test'),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}));

jest.mock('@/hooks/use-mobile-view', () => ({
  useMobileView: jest.fn(),
}));

const testRoutes: ILink[] = [
  {
    isEnabled: true,
    label: RouteLabelsEnum.Home,
    url: '/',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Museum,
    subLinks: [
      { isEnabled: true, label: RouteLabelsEnum.History, url: '/museum/history' },
      { isEnabled: true, label: RouteLabelsEnum.History, url: '/museum/architecture' },
    ],
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Contacts,
    url: '/contacts',
  },
];

const useMobileViewMock = useMobileView as jest.Mock;

describe('Header', () => {
  const renderComponent = (isMobile: boolean, links: ILink[]) => {
    useMobileViewMock.mockReturnValue(isMobile);

    return render(<Header links={links} />, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <NextIntlClientProvider locale="en" messages={messages}>
          <MantineProvider>{children}</MantineProvider>
        </NextIntlClientProvider>
      ),
    });
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component with related active links in desktop view', () => {
    const appRoutes = [...testRoutes];
    appRoutes[1].isEnabled = false;

    const expectedActiveLinksAmount = 2;

    renderComponent(false, appRoutes);

    const mainHeaderComponent = screen.getByTestId('header-component');

    expect(mainHeaderComponent).toBeInTheDocument();

    const displayedLinks: HTMLAnchorElement[] = screen.getAllByTestId('link');

    expect(displayedLinks.length).toBe(expectedActiveLinksAmount);

    expect(useMobileViewMock).toHaveBeenCalled();
  });

  it('should render component with related active links in mobile view', async () => {
    const appRoutes = [...testRoutes];
    appRoutes[1].isEnabled = false;

    const expectedActiveLinksAmount = 2;

    renderComponent(true, appRoutes);

    const mainHeaderComponent = screen.getByTestId('header-component');

    expect(mainHeaderComponent).toBeInTheDocument();

    const mobileMenuButton = screen.getByTestId('mobile-menu');

    expect(mobileMenuButton).toBeInTheDocument();

    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      const displayedLinks: HTMLAnchorElement[] = screen.getAllByTestId('link');

      expect(displayedLinks.length).toBe(expectedActiveLinksAmount);
    });

    expect(useMobileViewMock).toHaveBeenCalled();
  });

  it('should close mobile sidebar on clicking close button', async () => {
    renderComponent(true, testRoutes);

    const mobileMenuButton = screen.getByTestId('mobile-menu');

    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      const closeButton = screen.getByTestId('close-drawer-button');

      expect(closeButton).toBeInTheDocument();

      fireEvent.click(closeButton);
    });

    await waitFor(() => {
      const displayedLinks = screen.queryAllByTestId('link');

      expect(displayedLinks).toEqual([]);
    });
  });
});
