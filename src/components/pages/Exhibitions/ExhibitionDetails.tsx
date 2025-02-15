import React, { memo, useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { useLocale } from 'next-intl';

import ImageGallery from '@/components/organisms/ImageGallery/ImageGallery';
import { IExhibition } from '@/interfaces/IExhibition';
import { LocaleCodeCamelcase } from '@/locales';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

import styles from './Exhibitions.module.scss';

interface Props {
  exhibition: IExhibition;
}

export const ExhibitionDetails: React.FC<Props> = memo(function ExhibitionDetails({
  exhibition,
}: Props) {
  const locale = capitalizeFirstLetter(useLocale()) as LocaleCodeCamelcase;
  const [currentLocale] = useState(locale);

  const title = exhibition[`name${currentLocale}`] || exhibition.nameEn;
  const description =
    exhibition[`description${currentLocale}`]?.json || exhibition.descriptionEn.json;

  return (
    <div data-testid="exhibition" className={styles.exhibitionContainer}>
      <h2 data-testid="exhibition-title" className={styles.title}>
        {title}
      </h2>

      <div data-testid="exhibition-description" className={styles.description}>
        {documentToReactComponents(description as Document)}
      </div>

      <ImageGallery displayArrows={true} images={exhibition.exhibitionsImages} isLinkImage={true} />
    </div>
  );
});
