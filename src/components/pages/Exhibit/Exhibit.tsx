import { useEffect } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useTranslation } from 'react-i18next'
import { useShallow } from 'zustand/react/shallow'
import { useGetExhibitQuery } from '../../../../__generated__/schema.tsx'
import Error from '../../atoms/Error/Error.tsx'
import styles from './Exhibit.module.scss'
import Loading from '../../atoms/Loading/Loading.tsx'
import ImageGallery from '../../organisms/ImageGallery/ImageGallery.tsx'
import Player from '../../organisms/Player/Player.tsx'
import triggerGtagVisit from '../../../gtag/visit.ts'
import useImageGalleryStore from '../../../stores/useImageGalleryStore.ts'
import { LanguageCode, languages } from '../../../i18n.ts'

interface Props {
  slug: string
}

export default function ExhibitPage({ slug }: Props) {
  const {
    setIndex: setGalleryIndex,
    setIsOpen: setIsOpenGallery,
    setIsOpeningWithZoom: setIsOpeningGalleryWithZoom,
    setZoom: setGalleryZoom,
  } = useImageGalleryStore(
    useShallow((state) => ({
      setIndex: state.setIndex,
      setIsOpen: state.setIsOpen,
      setIsOpeningWithZoom: state.setIsOpeningWithZoom,
      setZoom: state.setZoom,
    })),
  )
  const { data, loading, error } = useGetExhibitQuery({
    variables: { slug },
  })
  const {
    i18n: { language },
    t,
  } = useTranslation()
  const currentLanguage = language as LanguageCode
  const exhibit = data?.exhibitCollection?.items[0]

  const images =
    exhibit?.imagesCollection?.items.map((i) => ({
      url: i?.url || '',
      id: i?.sys.id || '',
    })) || []

  const getExhibitNotFoundForLanguageMessage = () => {
    const messages = languages
      .filter((lang) => exhibit?.[`name${lang}`])
      .map(
        (lang) =>
          `<a href="/${slug}?lng=${lang}">${t(`exhibitNotFound${lang}`)}</a>`,
      )

    return `${t('exhibitNotFoundForLanguage')} ${messages.join(', ')}`
  }

  const title = exhibit?.[`name${currentLanguage}`]
  const author = exhibit?.[`author${currentLanguage}`]
  const audioFile = exhibit?.[`audioFile${currentLanguage}`]?.url
  const description = exhibit?.[`description${currentLanguage}`]?.json

  useEffect(() => {
    if (exhibit?.sys.id && slug && currentLanguage) {
      triggerGtagVisit(exhibit.sys.id, currentLanguage, slug)
    }
  }, [exhibit?.sys.id, slug, currentLanguage])

  useEffect(() => {
    document
      .getElementById('exhibit-description')
      ?.querySelectorAll('a')
      .forEach((link) => {
        link.addEventListener('click', (e) => {
          const { href } = e?.target as HTMLAnchorElement
          if (!href.includes('imageIndex')) {
            return
          }

          e.preventDefault()

          const params = new URLSearchParams(new URL(href).search)
          const indexString = params.get('imageIndex')
          const xString = params.get('x')
          const yString = params.get('y')
          const zoomString = params.get('zoom')
          const index = indexString ? parseInt(indexString, 10) : 0
          const x = xString ? parseInt(xString, 10) : 0
          const y = yString ? parseInt(yString, 10) : 0
          const zoom = zoomString ? parseInt(zoomString, 10) : 0

          setIsOpeningGalleryWithZoom(true)
          setGalleryIndex(index)
          setGalleryZoom(zoom, x, y)
          setIsOpenGallery(true)
        })
      })
  })

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
          <div id='exhibit-description' className={styles.descriptionContent}>
            {documentToReactComponents(description)}
          </div>
        </div>
      )}
    </article>
  )
}
