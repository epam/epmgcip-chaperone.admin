import { useEffect } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useTranslation } from 'react-i18next'
import { useGetExhibitQuery } from '../../../../__generated__/schema.tsx'
import Error from '../../atoms/Error/Error.tsx'
import styles from './Exhibit.module.scss'
import Loading from '../../atoms/Loading/Loading.tsx'
import ImageGallery from '../../organisms/ImageGallery/ImageGallery.tsx'
import Player from '../../organisms/Player/Player.tsx'
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter.ts'
import {
  ENGLISH_LANGUAGE_CODE,
  KARAKALPAK_LANGUAGE_CODE,
  RUSSIAN_LANGUAGE_CODE,
  UZBEK_LANGUAGE_CODE,
} from '../../../constants/languages.ts'
import {
  NameLanguageField,
  AuthorLanguageField,
  AudioLanguageField,
  DescriptionLanguageField,
  LanguageField,
} from '../../../types/languages.ts'
import triggerGtagVisit from '../../../gtag/visit.ts'

const languageFields: Record<string, Record<string, LanguageField>> = {
  [ENGLISH_LANGUAGE_CODE]: {
    name: 'nameEn',
    author: 'authorEn',
    audioFile: 'audioFileEn',
    description: 'descriptionEn',
  },
  [RUSSIAN_LANGUAGE_CODE]: {
    name: 'nameRu',
    author: 'authorRu',
    audioFile: 'audioFileRu',
    description: 'descriptionRu',
  },
  [UZBEK_LANGUAGE_CODE]: {
    name: 'nameUz',
    author: 'authorUz',
    audioFile: 'audioFileUz',
    description: 'descriptionUz',
  },
  [KARAKALPAK_LANGUAGE_CODE]: {
    name: 'nameKa',
    author: 'authorKa',
    audioFile: 'audioFileKa',
    description: 'descriptionKa',
  },
}

interface Props {
  slug: string
}

export default function ExhibitPage({ slug }: Props) {
  const { data, loading, error } = useGetExhibitQuery({
    variables: { slug },
  })
  const { i18n, t } = useTranslation()
  const exhibit = data?.exhibitCollection?.items[0]

  const images =
    exhibit?.imagesCollection?.items.map((i) => ({
      url: i?.url || '',
      id: i?.sys.id || '',
    })) || []

  const getExhibitNotFoundForLanguageMessage = () => {
    const messages = Object.keys(languageFields)
      .filter((lang) => exhibit?.[languageFields[lang].name])
      .map(
        (lang) =>
          `<a href="/${slug}?lng=${lang}">${t(`exhibitNotFound${capitalizeFirstLetter(lang)}`)}</a>`,
      )

    return `${t('exhibitNotFoundForLanguage')} ${messages.join(', ')}`
  }

  const title =
    exhibit?.[languageFields[i18n.language].name as NameLanguageField]
  const author =
    exhibit?.[languageFields[i18n.language].author as AuthorLanguageField]
  const audioFile =
    exhibit?.[languageFields[i18n.language].audioFile as AudioLanguageField]
      ?.url
  const description =
    exhibit?.[
      languageFields[i18n.language].description as DescriptionLanguageField
    ]?.json

  useEffect(() => {
    if (exhibit?.sys.id && slug && i18n.language) {
      triggerGtagVisit(exhibit.sys.id, i18n.language, slug)
    }
  }, [exhibit?.sys.id, slug, i18n.language])

  if (error || (!exhibit && !loading)) {
    return <Error message={t('exhibitNotFound')} />
  }

  if (exhibit && !title) {
    return <Error message={getExhibitNotFoundForLanguageMessage()} />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <article className={styles.exhibit} data-testid='exhibit'>
      <h2 className={styles.title}>{title}</h2>

      {author && <div className={styles.author}>{author}</div>}

      {images.length > 0 && (
        <div className={styles.gallery}>
          <ImageGallery images={images} />
        </div>
      )}

      {audioFile && (
        <div className={styles.audioPlayer}>
          <Player url={audioFile || ''} />
        </div>
      )}

      {exhibit?.yearOfCreation && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>{t('date')}</div>
          <div>{exhibit?.yearOfCreation}</div>
        </div>
      )}

      {description && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>{t('description')}</div>
          <div className={styles.descriptionContent}>
            {documentToReactComponents(description)}
          </div>
        </div>
      )}
    </article>
  )
}
