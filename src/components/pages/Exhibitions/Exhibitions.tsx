'use client';

import React, { useEffect, useState } from 'react';

import { Pagination } from '@mantine/core';

import { ExhibitionDetails } from '@/components/pages/Exhibitions/ExhibitionDetails';
import { exhibitionsRelatedItemsLimit } from '@/constants/pagination';
import { usePreviousValue } from '@/hooks/use-previous-value';
import { IExhibition } from '@/interfaces/IExhibition';
import { createApolloClient } from '@/lib/apolloClient';
import { getImagePreviewExhibitsByIds } from '@/lib/exhibit';
import { getExhibitions } from '@/lib/exhibition';
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

  const previousPage = usePreviousValue<number>(activePage);

  const onChangePage = (page: number): void => {
    setPage(page);
  };

  useEffect(() => {
    const fetchPageExhibitions = async (): Promise<void> => {
      const client = createApolloClient();

      const { exhibitions } = await getExhibitions(client)(
        exhibitionsAmountPerPage,
        exhibitionsAmountPerPage * (activePage - 1),
        exhibitionsRelatedItemsLimit,
      );

      const exhibitsIds = getExhibitsIdsFromExhibitions(exhibitions);
      const exhibitsImagesPreviews = await getImagePreviewExhibitsByIds(client)(exhibitsIds);

      const mergedExhibitions = mergeExhibitsImagesPreviewsIntoExhibitions(
        exhibitions,
        exhibitsImagesPreviews,
      );

      setItems(mergedExhibitions);
    };

    if (previousPage !== activePage) {
      fetchPageExhibitions();
    }
  }, [exhibitionsAmountPerPage, activePage, previousPage]);

  return (
    <div className={styles.root}>
      {items.map((exhibition) => (
        <React.Fragment key={exhibition.sys.id}>
          <ExhibitionDetails exhibition={exhibition} />
        </React.Fragment>
      ))}

      {totalExhibitionsAmount > exhibitionsAmountPerPage && (
        <Pagination
          value={activePage}
          onChange={onChangePage}
          className={styles.pagination}
          total={totalExhibitionsAmount}
        />
      )}
    </div>
  );
}
