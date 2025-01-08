import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import { Footer } from './Footer';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale="en" messages={messages}>
    <MantineProvider>{children}</MantineProvider>
  </NextIntlClientProvider>
);

describe('Footer', () => {
  it('renders correctly and show copyrights', () => {
    const { getByText } = render(<Footer />, { wrapper });

    expect(getByText(new RegExp('All copyrights reserved', 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp('Contact details', 'i'))).toBeInTheDocument();
  });

  it('has social network links', () => {
    render(<Footer />, { wrapper });

    const socialNetworkLinks = 4;
    expect(screen.getAllByTestId('social-network').length).toBe(socialNetworkLinks);
  });

  it('show current year', () => {
    render(<Footer />, { wrapper });

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString(), 'i'))).toBeInTheDocument();
  });
});
