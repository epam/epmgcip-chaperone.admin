import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { ITopLatestExhibit } from '@/interfaces/ITopLatestExhibit';
import { topLatestExhibits } from '@/mocks/exhibit';

import Home from './Home';
import messages from '../../../../messages/en.json';

jest.mock('@/navigation', () => ({
  Link: jest.fn().mockReturnValue(<img src={'/test'} alt={'test'} />),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}));

jest.mock('yet-another-react-lightbox', () => jest.fn());
jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

describe('Home component', () => {
  const renderComponent = (exhibits: ITopLatestExhibit[]) =>
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Home exhibits={exhibits} />
      </NextIntlClientProvider>,
    );

  it('should render component', () => {
    const { getByText } = renderComponent(topLatestExhibits);

    expect(getByText('Welcome to our official webpage')).toBeInTheDocument();
  });

  it('should render component with image gallery', () => {
    const { container } = renderComponent(topLatestExhibits);

    const imageGalleryElement = container.querySelector('.image-gallery');

    expect(imageGalleryElement).toBeInTheDocument();
  });

  it('should not render component with image gallery if no images are discovered', () => {
    const exhibits = topLatestExhibits.map((exhibit) => ({
      ...exhibit,
      imagesCollection: { items: [] },
    }));

    const { container } = renderComponent(exhibits);

    const imageGalleryElement = container.querySelector('.image-gallery');

    expect(imageGalleryElement).toBeNull();
  });
});
