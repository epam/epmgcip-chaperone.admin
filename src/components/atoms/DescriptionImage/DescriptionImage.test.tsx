import { render } from '@testing-library/react';

import DescriptionImage from './DescriptionImage';

describe('DescriptionImage Component', () => {
  const url = 'https://example.com/test-image.jpg';
  const title = 'Test Image';
  const height = 300;
  const width = 500;

  it('renders the image with the correct src, alt, height, and width', () => {
    const { getByAltText } = render(
      <DescriptionImage url={url} title={title} height={height} width={width} />,
    );
    const image = getByAltText(title);

    expect(image).toBeInTheDocument();
    expect(decodeURIComponent(image.getAttribute('src') || '')).toMatch(/test-image\.jpg/);
    expect(image).toHaveAttribute('alt', title);
    expect(image).toHaveAttribute('height', String(height));
    expect(image).toHaveAttribute('width', String(width));
  });
});
