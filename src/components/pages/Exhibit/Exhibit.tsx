import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useTranslation } from 'react-i18next'
import { useGetExhibitQuery } from '../../../../__generated__/schema.tsx'
import Error from '../../atoms/Error/Error.tsx'
import styles from './Exhibit.module.scss'
import Loading from '../../atoms/Loading/Loading.tsx'
import ImageGallery from '../../organisms/ImageGallery/ImageGallery.tsx'
import Player from '../../organisms/Player/Player.tsx'

interface Props {
  slug: string
}

export default function Exhibit({ slug }: Props) {
  const { data, loading, error } = useGetExhibitQuery({
    variables: { slug },
  })
  const { i18n } = useTranslation()
  const exhibit = data?.exhibitCollection?.items[0]

  let exhibitName
  let authorName
  let description
  let audioFile
  let audioFileUrl

  switch (i18n.language) {
    case 'ru':
      exhibitName = exhibit?.nameRu
      authorName = exhibit?.authorRu
      description = exhibit?.descriptionRu?.json
      audioFile = exhibit?.audioFileRu
      audioFileUrl = exhibit?.audioFileRu?.url || ''
      break
    default:
      exhibitName = exhibit?.nameEn
      authorName = exhibit?.authorEn
      description = exhibit?.descriptionEn?.json
      audioFile = exhibit?.audioFileEn
      audioFileUrl = exhibit?.audioFileEn?.url || ''
      break
  }

  const images =
    exhibit?.imagesCollection?.items.map((i) => ({
      url: i?.url || '',
      id: i?.sys.id || '',
    })) || []

  const exhibitTranslations =
    i18n.getResourceBundle(i18n.language, 'exhibit') || {}

  if (error || (!exhibit && !loading)) {
    return <Error message={exhibitTranslations.notFound} />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <article className={styles.exhibit}>
      <h2 className={styles.title}>{exhibitName}</h2>

      {exhibit?.authorEn && <div className={styles.author}>{authorName}</div>}

      {images.length > 0 && (
        <div className={styles.gallery}>
          <ImageGallery images={images} />
        </div>
      )}

      {audioFile && (
        <div className={styles.audioPlayer}>
          <Player url={audioFileUrl || ''} />
        </div>
      )}

      {exhibit?.yearOfCreation && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>
            {exhibitTranslations.date}
          </div>
          <div>{exhibit?.yearOfCreation}</div>
        </div>
      )}

      {description && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>
            {exhibitTranslations.description}
          </div>
          <div className={styles.descriptionContent}>
            {documentToReactComponents(description)}
          </div>
        </div>
      )}
    </article>
  )
}
