import React from 'react';

import { ExhibitionDetails } from '@/components/pages/Exhibitions/ExhibitionDetails';
import { IExhibition } from '@/interfaces/IExhibition';

import styles from './Exhibitions.module.scss';

interface Props {
  exhibitions: IExhibition[];
}

export default function Exhibitions({ exhibitions }: Props): React.ReactElement {
  return (
    <div className={styles.root}>
      {exhibitions.map((exhibition) => (
        <React.Fragment key={exhibition.sys.id}>
          <ExhibitionDetails exhibition={exhibition} />
        </React.Fragment>
      ))}
    </div>
  );
}
