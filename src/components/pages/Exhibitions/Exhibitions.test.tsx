import '@testing-library/jest-dom';
import { MantineProvider } from '@mantine/core';
import { screen, render, RenderResult, fireEvent, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import { IExhibition } from '@/interfaces/IExhibition';
import { createApolloClient } from '@/lib/apolloClient';
import { getImagePreviewExhibitsByIds } from '@/lib/exhibit';
import { getExhibitions } from '@/lib/exhibition';
import { exhibitImagePreview } from '@/mocks/exhibit';
import { exhibitionItem } from '@/mocks/exhibition';

import Exhibitions from './Exhibitions';

jest.mock('yet-another-react-lightbox', () => jest.fn());
jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

jest.mock('@/lib/exhibition', () => ({
  getExhibitions: jest.fn(),
}));

jest.mock('@/lib/exhibit', () => ({
  getImagePreviewExhibitsByIds: jest.fn(),
}));

jest.mock('@/lib/apolloClient', () => ({
  createApolloClient: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
) as jest.Mock;

const getExhibitionsMock = getExhibitions as jest.Mock;
const getImagePreviewExhibitsByIdsMock = getImagePreviewExhibitsByIds as jest.Mock;
const createApolloClientMock = createApolloClient as jest.Mock;

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

  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it.each([
    { exhibitionsAmountPerPage: 1, expectedPaginationCount: 3, totalExhibitionsAmount: 3 },
    { exhibitionsAmountPerPage: 5, expectedPaginationCount: 2, totalExhibitionsAmount: 6 },
    { exhibitionsAmountPerPage: 4, expectedPaginationCount: 3, totalExhibitionsAmount: 9 },
  ])(
    'should render exhibitions pagination items',
    ({ exhibitionsAmountPerPage, totalExhibitionsAmount, expectedPaginationCount }) => {
      const exhibitions = [exhibitionItem];

      renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

      expect(screen.getByTestId('exhibitions-pagination')).toBeInTheDocument();

      for (let i = 1; i <= expectedPaginationCount; i++) {
        expect(screen.getByTestId(`exhibitions-page-${i}`)).toBeInTheDocument();
      }
    },
  );

  it('should not render exhibitions pagination if their total amount less then or equal items per page', () => {
    const exhibitions = [exhibitionItem];
    const exhibitionsAmountPerPage = 5;
    const totalExhibitionsAmount = 1;

    renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

    expect(screen.queryByTestId('exhibitions-pagination')).toBeNull();
  });

  it('should display an error if validation for search input fails', () => {
    const exhibitions = [exhibitionItem];
    const exhibitionsAmountPerPage = 1;
    const totalExhibitionsAmount = 1;

    renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

    const searchInput = screen.getByTestId('exhibitions-search-input');

    fireEvent.change(searchInput!, { target: { value: 'ab' } });

    const searchSubmit = screen.getByTestId('exhibitions-search-submit');

    fireEvent.click(searchSubmit!);

    const searchError = screen.getByTestId('exhibitions-search-error');

    expect(searchError!.textContent).not.toBeNull();
  });

  it('should perform search successfully and render new element on page', async () => {
    createApolloClientMock.mockReturnValue({});
    getExhibitionsMock.mockImplementation(() => async () => ({
      exhibitions: [exhibitionItem],
      total: 1,
    }));
    getImagePreviewExhibitsByIdsMock.mockImplementation(() => async () => [exhibitImagePreview]);

    const exhibitions: IExhibition[] = [];
    const exhibitionsAmountPerPage = 1;
    const totalExhibitionsAmount = 0;

    renderComponent(exhibitions, exhibitionsAmountPerPage, totalExhibitionsAmount);

    const searchInput = screen.getByTestId('exhibitions-search-input');

    fireEvent.change(searchInput!, { target: { value: 'test' } });

    const searchSubmit = screen.getByTestId(
      'exhibitions-search-submit',
    ) as HTMLButtonElement | null;

    fireEvent.click(searchSubmit!);

    await waitFor(() => {
      expect(searchSubmit!.disabled).toBeTruthy();
    });

    await waitFor(() => {
      expect(createApolloClientMock).toHaveBeenCalled();
      expect(getExhibitionsMock).toHaveBeenCalled();
      expect(getImagePreviewExhibitsByIdsMock).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(searchSubmit!.disabled).toBeFalsy();

      expect(screen.getByTestId('exhibition')).toBeInTheDocument();
      expect(screen.getByTestId('exhibition-title')).toBeInTheDocument();
      expect(screen.getByTestId('exhibition-description')).toBeInTheDocument();
    });
  });
});
