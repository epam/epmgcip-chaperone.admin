import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import Header from './Header';
import messages from '../../../../messages/en.json';

jest.mock('@/navigation', () => ({
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
