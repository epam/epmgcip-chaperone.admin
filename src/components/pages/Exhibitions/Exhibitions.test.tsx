import '@testing-library/jest-dom';
import { screen, render, RenderResult } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import Exhibitions from '@/components/pages/Exhibitions/Exhibitions';
import { IExhibition } from '@/interfaces/IExhibition';
import { exhibitionItem } from '@/mocks/exhibition';

jest.mock('yet-another-react-lightbox', () => jest.fn());
jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

describe('Exhibitions component', () => {
  const renderComponent = (exhibitions: IExhibition[]): RenderResult =>
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Exhibitions exhibitions={exhibitions} />
      </NextIntlClientProvider>,
    );

  it('should render exhibition item correctly', () => {
    renderComponent([exhibitionItem]);

    expect(screen.getByTestId('exhibition')).toBeInTheDocument();
    expect(screen.getByTestId('exhibition-title')).toBeInTheDocument();
    expect(screen.getByTestId('exhibition-description')).toBeInTheDocument();

    for (let i = 0; i < exhibitionItem.referencesCollection.items.length; i++) {
      expect(screen.getByTestId(`image-gallery-image-${i}`)).toBeInTheDocument();
    }
  });

  it('should not render exhibitions if they are not provided', async () => {
    renderComponent([]);

    expect(screen.queryByTestId('exhibition')).toBeNull();
  });
});
