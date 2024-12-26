import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly and show current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString(), 'i'))).toBeInTheDocument();
  });
});
