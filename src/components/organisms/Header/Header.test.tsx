import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import Header from './Header';

jest.mock('@/navigation', () => ({
  Link: jest.fn().mockReturnValue(<img src={'/test'} alt={'test'} />),
  usePathname: jest.fn().mockReturnValue('/test'),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}));

describe('Header', () => {
  it('renders', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Header />
      </NextIntlClientProvider>,
    );

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });
});
