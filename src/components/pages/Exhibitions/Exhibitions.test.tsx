import '@testing-library/jest-dom';
import { MantineProvider } from '@mantine/core';
import { screen, render, RenderResult } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import Exhibitions from '@/components/pages/Exhibitions/Exhibitions';
import { IExhibition } from '@/interfaces/IExhibition';
import { exhibitionItem } from '@/mocks/exhibition';

jest.mock('yet-another-react-lightbox', () => jest.fn());
jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

describe('Exhibitions component', () => {
  const renderComponent = (
    exhibitions: IExhibition[],
    exhibitionsAmountPerPage: number,
    totalExhibitionsAmount: number,
  ): RenderResult =>
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <MantineProvider>
          <Exhibitions
            exhibitionsAmountPerPage={exhibitionsAmountPerPage}
            totalExhibitionsAmount={totalExhibitionsAmount}
            exhibitions={exhibitions}
          />
        </MantineProvider>
      </NextIntlClientProvider>,
    );

  it('should render exhibition item correctly', () => {
    const exhibitions = [exhibitionItem];
    const exhibitionsAmountPerPage = 1;
    const totalExhibitionsAmount = 1;

    renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

    expect(screen.getByTestId('exhibition')).toBeInTheDocument();
    expect(screen.getByTestId('exhibition-title')).toBeInTheDocument();
    expect(screen.getByTestId('exhibition-description')).toBeInTheDocument();

    for (let i = 0; i < exhibitionItem.referencesCollection.items.length; i++) {
      expect(screen.getByTestId(`image-gallery-image-${i}`)).toBeInTheDocument();
    }
  });

  it('should not render exhibitions if they are not provided', () => {
    const exhibitions = [] as IExhibition[];
    const exhibitionsAmountPerPage = 1;
    const totalExhibitionsAmount = 0;

    renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

    expect(screen.queryByTestId('exhibition')).toBeNull();
  });

  it('should render exhibitions pagination items', () => {
    const exhibitions = [exhibitionItem];
    const exhibitionsAmountPerPage = 1;
    const totalExhibitionsAmount = 3;

    renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

    expect(screen.getByTestId('exhibitions-pagination')).toBeInTheDocument();

    for (let i = 1; i <= exhibitionItem.referencesCollection.items.length; i++) {
      expect(screen.getByTestId(`exhibitions-page-${i}`)).toBeInTheDocument();
    }
  });

  it('should not render exhibitions pagination if their total amount less then or equal items per page', () => {
    const exhibitions = [exhibitionItem];
    const exhibitionsAmountPerPage = 5;
    const totalExhibitionsAmount = 1;

    renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

    expect(screen.queryByTestId('exhibitions-pagination')).toBeNull();
  });
});
