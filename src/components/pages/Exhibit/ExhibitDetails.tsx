import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTranslations } from 'next-intl';

import ImageGallery from '@/components/organisms/ImageGallery/ImageGallery';
import Player from '@/components/organisms/Player/Player';
import IExhibit from '@/interfaces/IExhibit';
import { LocaleCodeCamelcase } from '@/locales';

import styles from './Exhibit.module.scss';

interface Props {
  exhibit: IExhibit;
  selectedLocale: LocaleCodeCamelcase;
}

export const ExhibitDetails: React.FC<Props> = (props) => {
  const t = useTranslations();

  const title = props.exhibit[`name${props.selectedLocale}`];
  const author = props.exhibit[`author${props.selectedLocale}`];
  const audioFile = props.exhibit[`audioFile${props.selectedLocale}`]?.url;
  const description = props.exhibit[`description${props.selectedLocale}`]?.json;
  const yearOfCreation = props.exhibit.yearOfCreation;

  const images =
    props.exhibit.imagesCollection?.items?.map((i) => ({
      id: i?.sys.id || '',
      url: i?.url || '',
    })) ?? [];

  return (
    <article className={styles.exhibit} data-testid="exhibit">
      <h2 className={styles.title}>{title}</h2>

      {author && <div className={styles.author}>{author}</div>}

      {images.length > 0 && (
        <div className={styles.gallery}>
          <ImageGallery images={images} isLinkImage={false} displayArrows={false} />
        </div>
      )}

      {audioFile && (
        <div className={styles.audioPlayer}>
          <Player url={audioFile || ''} />
        </div>
      )}

      {yearOfCreation && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>{t('date')}</div>
          <div>{yearOfCreation}</div>
        </div>
      )}

      {description && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>{t('description')}</div>
          <div id="exhibit-description" className={styles.descriptionContent}>
            {documentToReactComponents(description)}
          </div>
        </div>
      )}
    </article>
  );
};
