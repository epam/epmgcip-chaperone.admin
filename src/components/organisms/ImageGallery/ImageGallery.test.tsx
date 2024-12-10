import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ImageGallery from '@/components/organisms/ImageGallery/ImageGallery';

jest.mock('yet-another-react-lightbox', () => jest.fn());
jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

jest.mock('@/navigation', () => ({
  Link: jest.fn().mockReturnValue(<img src={'/test'} alt={'test'} />),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}));

describe('ImageGallery', () => {
  const images = [
    { id: '1', url: 'https://example.com/image1.jpg' },
    { id: '2', url: 'https://example.com/image2.jpg' },
    { id: '3', url: 'https://example.com/image3.jpg' },
  ];

  it('renders gallery', () => {
    const { container } = render(
      <ImageGallery images={images} isLinkImage={false} displayArrows={false} />,
    );

    const imageGallery = container.querySelector('.image-gallery') as HTMLDivElement;

    expect(imageGallery).toBeInTheDocument();
  });
});
