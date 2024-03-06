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

interface Props {
  slug: string
}

type TitleKey = 'nameEn' | 'nameUz' | 'nameRu' | 'nameKa'
type AuthorKey = 'authorEn' | 'authorUz' | 'authorRu' | 'authorKa'
type DescriptionKey =
  | 'descriptionEn'
  | 'descriptionUz'
  | 'descriptionRu'
  | 'descriptionKa'
type AudioFileKey =
  | 'audioFileEn'
  | 'audioFileUz'
  | 'audioFileRu'
  | 'audioFileKa'

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

  const titleKey = `name${capitalizeFirstLetter(i18n.language)}` as TitleKey
  const authorKey = `author${capitalizeFirstLetter(i18n.language)}` as AuthorKey
  const descriptionKey =
    `description${capitalizeFirstLetter(i18n.language)}` as DescriptionKey
  const audioFileKey =
    `audioFile${capitalizeFirstLetter(i18n.language)}` as AudioFileKey

  const getExhibitNotFoundForLanguageMessage = () => {
    let message = t('exhibitNotFoundForLanguage')
    let count = 0

    if (exhibit?.nameRu) {
      message += `${count > 0 ? ',' : ''} <a href="/${slug}?lng=${RUSSIAN_LANGUAGE_CODE}">${t('exhibitNotFoundRussian')}</a>`
      count += 1
    }

    if (exhibit?.nameEn) {
      message += `${count > 0 ? ',' : ''} <a href="/${slug}?lng=${ENGLISH_LANGUAGE_CODE}">${t('exhibitNotFoundEnglish')}</a>`
      count += 1
    }

    if (exhibit?.nameUz) {
      message += `${count > 0 ? ',' : ''} <a href="/${slug}?lng=${UZBEK_LANGUAGE_CODE}">${t('exhibitNotFoundUzbek')}</a>`
      count += 1
    }

    if (exhibit?.nameKa) {
      message += `${count > 0 ? ',' : ''} <a href="/${slug}?lng=${KARAKALPAK_LANGUAGE_CODE}">${t('exhibitNotFoundKarakalpak')}</a>`
      count += 1
    }

    message += ` ${t('exhibitNotFoundLanguage')}`

    return message
  }

  if (error || (!exhibit && !loading)) {
    return <Error message={t('exhibitNotFound')} />
  }

  if (exhibit && !exhibit?.[titleKey]) {
    return <Error message={getExhibitNotFoundForLanguageMessage()} />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <article className={styles.exhibit} data-testid='exhibit'>
      <h2 className={styles.title}>{exhibit?.[titleKey]}</h2>

      {exhibit?.authorEn && (
        <div className={styles.author}>{exhibit?.[authorKey]}</div>
      )}

      {images.length > 0 && (
        <div className={styles.gallery}>
          <ImageGallery images={images} />
        </div>
      )}

      {exhibit?.[audioFileKey] && exhibit?.[audioFileKey]?.url && (
        <div className={styles.audioPlayer}>
          <Player url={exhibit?.[audioFileKey]?.url || ''} />
        </div>
      )}

      {exhibit?.yearOfCreation && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>{t('date')}</div>
          <div>{exhibit?.yearOfCreation}</div>
        </div>
      )}

      {exhibit?.[descriptionKey] && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>{t('description')}</div>
          <div className={styles.descriptionContent}>
            {documentToReactComponents(exhibit?.[descriptionKey]?.json)}
          </div>
        </div>
      )}
    </article>
  )
}
