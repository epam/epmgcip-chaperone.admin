import { render, screen } from '@testing-library/react';

import Loading from './Loading';
import '@testing-library/jest-dom';

describe('Loading', () => {
  it('renders', () => {
    render(<Loading />);

    expect(screen.getByTestId('loading-component')).toBeInTheDocument();
  });
});
