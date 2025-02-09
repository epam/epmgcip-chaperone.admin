import React from 'react';

import { Pagination } from '@mantine/core';

import { ExhibitionDetails } from '@/components/pages/Exhibitions/ExhibitionDetails';
import { IExhibition } from '@/interfaces/IExhibition';

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
  return (
    <div className={styles.root}>
      {exhibitions.map((exhibition) => (
        <React.Fragment key={exhibition.sys.id}>
          <ExhibitionDetails exhibition={exhibition} />
        </React.Fragment>
      ))}

      {totalExhibitionsAmount > exhibitionsAmountPerPage && (
        <Pagination total={totalExhibitionsAmount} />
      )}
    </div>
  );
}
