'use client';

import React, { useMemo } from 'react';

import { useLocale, useTranslations } from 'next-intl';

import ImageGallery from '@/components/organisms/ImageGallery/ImageGallery';
import { EXHIBIT_URL } from '@/constants/routes';
import { IImageGalleryImage } from '@/interfaces/IImageGalleryImage';
import { ITopLatestExhibit } from '@/interfaces/ITopLatestExhibit';

import styles from './Home.module.scss';

interface Props {
  exhibits: ITopLatestExhibit[];
}

export default function Home(props: Props): React.ReactElement {
  const t = useTranslations();
  const locale = useLocale();

  const images: IImageGalleryImage[] = useMemo(
    () =>
      props.exhibits
        .filter((exhibit) => !!exhibit.imagesCollection.items.length)
        .map((exhibit) => {
          const firstImageItem = exhibit.imagesCollection.items[0];

          return {
            clickUrl: `${locale}${EXHIBIT_URL}/${exhibit.slug}`,
            id: firstImageItem.sys.id,
            url: firstImageItem.url,
          };
        }),
    [props.exhibits],
  );

  return (
    <div>
      <h2 className={styles.title}>{t('homePageTitle')}</h2>

      {images.length > 0 && (
        <div className={styles.gallery}>
          <ImageGallery images={images} isLinkImage={true} displayArrows={true} />
        </div>
      )}
    </div>
  );
}
