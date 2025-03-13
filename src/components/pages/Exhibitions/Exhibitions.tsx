'use client';

import { ChangeEvent, FC, Fragment, useMemo, useState } from 'react';

import { Button, Pagination, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import LoadingOverlay from '@/components/atoms/LoadingOverlay/LoadingOverlay';
import {
  exhibitionsDefaultSearchValue,
  exhibitionsRelatedItemsLimit,
} from '@/constants/pagination';
import { withClientSettings } from '@/hocs/with-client-settings';
import { ICredentialsContextProps } from '@/interfaces/ICredentialsContext';
import { IExhibition } from '@/interfaces/IExhibition';
import { createApolloClient } from '@/lib/apolloClient';
import { getImagePreviewExhibitsByIds } from '@/lib/exhibit';
import { getExhibitions } from '@/lib/exhibition';
import {
  getExhibitsIdsFromExhibitions,
  mergeExhibitsImagesPreviewsIntoExhibitions,
} from '@/utils/exhibitions';

import { ExhibitionDetails } from './ExhibitionDetails';
import styles from './Exhibitions.module.scss';

const initialPage = 1;
const minSearchLength = 3;

interface Props extends ICredentialsContextProps {
  exhibitions: IExhibition[];
  exhibitionsAmountPerPage: number;
  totalExhibitionsAmount: number;
}

const Exhibitions: FC<Props> = ({
  exhibitions,
  totalExhibitionsAmount,
  exhibitionsAmountPerPage,
  spaceId,
  accessToken,
}) => {
  const [totalItemsCount, setTotalItemsCount] = useState<number>(totalExhibitionsAmount);
  const [items, setItems] = useState<IExhibition[]>(exhibitions);
  const [activePage, setPage] = useState<number>(initialPage);
  const [searchInput, setSearchInput] = useState<string>(exhibitionsDefaultSearchValue);
  const [searchError, setSearchError] = useState<string>('');
  const [isSubmittingSearch, setIsSubmittingSearch] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const isSearchInputInvalid = (): boolean =>
    searchInput.length >= 1 && searchInput.length < minSearchLength;

  const fetchExhibitions = async (search: string, page: number): Promise<void> => {
    setIsFetching(true);
    const client = createApolloClient(spaceId, accessToken);

    const { exhibitions, total } = await getExhibitions(client)(
      search,
      exhibitionsAmountPerPage,
      exhibitionsAmountPerPage * (page - 1),
      exhibitionsRelatedItemsLimit,
    );

    const exhibitsIds = getExhibitsIdsFromExhibitions(exhibitions);
    const exhibitsImagesPreviews = await getImagePreviewExhibitsByIds(client)(exhibitsIds);

    const mergedExhibitions = mergeExhibitsImagesPreviewsIntoExhibitions(
      exhibitions,
      exhibitsImagesPreviews,
    );

    setItems(mergedExhibitions);
    setTotalItemsCount(total);
    setIsFetching(false);
  };

  const onChangePage = async (page: number): Promise<void> => {
    setPage(page);

    await fetchExhibitions(searchInput, page);
  };

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  const onClickSearch = async (): Promise<void> => {
    if (isSearchInputInvalid()) {
      setSearchError(`Please, enter more than ${minSearchLength} symbols to start search.`);

      return;
    }

    setIsSubmittingSearch(true);
    setPage(initialPage);
    setSearchError('');

    await fetchExhibitions(searchInput, initialPage);

    setIsSubmittingSearch(false);
  };

  const pagesAmount = useMemo(
    () =>
      totalItemsCount && exhibitionsAmountPerPage
        ? Math.ceil(totalItemsCount / exhibitionsAmountPerPage)
        : 0,
    [totalItemsCount, exhibitionsAmountPerPage],
  );

  return (
    <div className={styles.root}>
      <div className={styles.searchPanel}>
        <TextInput
          className={styles.searchInput}
          data-testid="exhibitions-search-input"
          value={searchInput}
          onChange={onChangeSearchInput}
        />

        <Button
          className={styles.searchButton}
          disabled={isSubmittingSearch}
          data-testid="exhibitions-search-submit"
          onClick={onClickSearch}
        >
          <IconSearch />
        </Button>
      </div>

      <p data-testid="exhibitions-search-error" className={styles.searchError}>
        {searchError}
      </p>

      <div className={styles.contentWrapper}>
        <LoadingOverlay visible={isFetching} />

        {items.length ? (
          <div>
            {items.map((exhibition) => (
              <Fragment key={exhibition.sys.id}>
                <ExhibitionDetails exhibition={exhibition} />
              </Fragment>
            ))}
          </div>
        ) : null}
      </div>

      {totalItemsCount > exhibitionsAmountPerPage && (
        <Pagination
          className={styles.pagination}
          data-testid="exhibitions-pagination"
          getItemProps={(page: number) => ({ 'data-testid': `exhibitions-page-${page}` })}
          onChange={onChangePage}
          total={pagesAmount}
          value={activePage}
        />
      )}
    </div>
  );
};

export default withClientSettings(Exhibitions);
