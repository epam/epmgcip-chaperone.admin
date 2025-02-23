'use client';

import React, { useMemo, useState } from 'react';

import { Button, Pagination, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { ExhibitionDetails } from '@/components/pages/Exhibitions/ExhibitionDetails';
import {
  exhibitionsDefaultSearchValue,
  exhibitionsRelatedItemsLimit,
} from '@/constants/pagination';
import { IExhibition } from '@/interfaces/IExhibition';
import { createApolloClient } from '@/lib/apolloClient';
import { getImagePreviewExhibitsByIds } from '@/lib/exhibit';
import { getExhibitions } from '@/lib/exhibition';
import {
  getExhibitsIdsFromExhibitions,
  mergeExhibitsImagesPreviewsIntoExhibitions,
} from '@/utils/exhibitions';

import styles from './Exhibitions.module.scss';

const initialPage = 1;
const minSearchLength = 3;

interface Props {
  exhibitions: IExhibition[];
  exhibitionsAmountPerPage: number;
  totalExhibitionsAmount: number;
}

export default function Exhibitions({
  exhibitions,
  totalExhibitionsAmount,
  exhibitionsAmountPerPage,
}: Props): React.ReactElement {
  const [totalItemsCount, setTotalItemsCount] = useState<number>(totalExhibitionsAmount);
  const [items, setItems] = useState<IExhibition[]>(exhibitions);
  const [activePage, setPage] = useState<number>(initialPage);
  const [searchInput, setSearchInput] = useState<string>(exhibitionsDefaultSearchValue);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isSubmittingSearch, setIsSubmittingSearch] = useState<boolean>(false);

  const isSearchInputInvalid = (): boolean =>
    searchInput.length >= 1 && searchInput.length < minSearchLength;

  const fetchExhibitions = async (search: string, page: number): Promise<void> => {
    const client = createApolloClient();

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
  };

  const onChangePage = async (page: number): Promise<void> => {
    setPage(page);

    await fetchExhibitions(searchInput, page);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
          value={searchInput}
          onChange={onChangeSearchInput}
        />

        <Button
          onClick={onClickSearch}
          className={styles.searchButton}
          disabled={isSubmittingSearch}
        >
          <IconSearch />
        </Button>
      </div>

      <p className={styles.searchError}>{searchError}</p>

      {items.length ? (
        <div>
          {items.map((exhibition) => (
            <React.Fragment key={exhibition.sys.id}>
              <ExhibitionDetails exhibition={exhibition} />
            </React.Fragment>
          ))}
        </div>
      ) : null}

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
}
