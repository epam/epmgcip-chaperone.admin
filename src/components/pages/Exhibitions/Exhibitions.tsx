'use client';

import React, { useMemo, useState } from 'react';

import { ApolloClient } from '@apollo/client';
import { Button, Pagination, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { ExhibitionDetails } from '@/components/pages/Exhibitions/ExhibitionDetails';
import { exhibitionsRelatedItemsLimit } from '@/constants/pagination';
import { IExhibition } from '@/interfaces/IExhibition';
import { IExhibitionContentModel } from '@/interfaces/IExhibitionContentModel';
import { createApolloClient } from '@/lib/apolloClient';
import { getImagePreviewExhibitsByIds } from '@/lib/exhibit';
import { getExhibitions, searchExhibitionsByText } from '@/lib/exhibition';
import {
  getExhibitsIdsFromExhibitions,
  mergeExhibitsImagesPreviewsIntoExhibitions,
} from '@/utils/exhibitions';

import styles from './Exhibitions.module.scss';

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
  const [items, setItems] = useState<IExhibition[]>(exhibitions);
  const [activePage, setPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>('');

  const getMergedRelatedExhibits = async (
    client: ApolloClient<unknown>,
    exhibitions: IExhibitionContentModel[],
  ): Promise<IExhibition[]> => {
    const exhibitsIds = getExhibitsIdsFromExhibitions(exhibitions);
    const exhibitsImagesPreviews = await getImagePreviewExhibitsByIds(client)(exhibitsIds);

    return mergeExhibitsImagesPreviewsIntoExhibitions(exhibitions, exhibitsImagesPreviews);
  };

  const onChangePage = async (page: number): Promise<void> => {
    setPage(page);

    const client = createApolloClient();

    const { exhibitions } = await getExhibitions(client)(
      exhibitionsAmountPerPage,
      exhibitionsAmountPerPage * (page - 1),
      exhibitionsRelatedItemsLimit,
    );

    const mergedExhibitions = await getMergedRelatedExhibits(client, exhibitions);

    setItems(mergedExhibitions);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  const onClickSearch = async (): Promise<void> => {
    setPage(1);

    const client = createApolloClient();

    const { exhibitions } = await searchExhibitionsByText(client)(
      searchInput,
      exhibitionsAmountPerPage,
      exhibitionsAmountPerPage * (activePage - 1),
      exhibitionsRelatedItemsLimit,
    );

    const mergedExhibitions = await getMergedRelatedExhibits(client, exhibitions);

    setItems(mergedExhibitions);
  };

  const pagesAmount = useMemo(
    () =>
      totalExhibitionsAmount && exhibitionsAmountPerPage
        ? Math.ceil(totalExhibitionsAmount / exhibitionsAmountPerPage)
        : 0,
    [totalExhibitionsAmount, exhibitionsAmountPerPage],
  );

  return (
    <div className={styles.root}>
      <div className={styles.searchPanel}>
        <TextInput value={searchInput} onChange={onChangeSearchInput} />

        <Button onClick={onClickSearch}>
          <IconSearch />
        </Button>
      </div>

      {items.map((exhibition) => (
        <React.Fragment key={exhibition.sys.id}>
          <ExhibitionDetails exhibition={exhibition} />
        </React.Fragment>
      ))}

      {totalExhibitionsAmount > exhibitionsAmountPerPage && (
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
