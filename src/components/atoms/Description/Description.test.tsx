import { render } from '@testing-library/react';

import Description from './Description';

describe('Description Component', () => {
  it('renders children correctly', () => {
    const childText = 'This is a test description';
    const { getByText } = render(<Description>{childText}</Description>);

    expect(getByText(childText)).toBeInTheDocument();
  });
});
