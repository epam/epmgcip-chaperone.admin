import { render } from '@testing-library/react';

import Title from './Title';

describe('Title Component', () => {
  it('renders the children text correctly', () => {
    const childText = 'Welcome to the testing world!';
    const { getByText } = render(<Title>{childText}</Title>);

    const titleElement = getByText(childText);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H2');
  });
});
