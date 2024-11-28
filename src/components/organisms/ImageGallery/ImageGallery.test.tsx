import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import ImageGallery from './ImageGallery';

jest.mock('yet-another-react-lightbox', () => jest.fn());
jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

describe('ImageGallery', () => {
  const images = [
    { id: '1', url: 'https://example.com/image1.jpg' },
    { id: '2', url: 'https://example.com/image2.jpg' },
    { id: '3', url: 'https://example.com/image3.jpg' },
  ];

  it('renders gallery', () => {
    render(<ImageGallery images={images} />);
  });
});
