import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useGetExhibitQuery } from '../../../../__generated__/schema.tsx'
import Error from '../../atoms/Error/Error.tsx'
import styles from './Exhibit.module.scss'
import Loading from '../../atoms/Loading/Loading.tsx'

interface Props {
  slug: string
}

export default function Exhibit({ slug }: Props) {
  const { data, loading, error } = useGetExhibitQuery({
    variables: { slug },
  })
  const exhibit = data?.exhibitCollection?.items[0]

  if (error || (!exhibit && !loading)) {
    return <Error message='Exhibit can not found' />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <article className={styles.exhibit}>
      <h2 className={styles.title}>{exhibit?.nameEn}</h2>

      {exhibit?.authorEn && (
        <div className={styles.author}>{exhibit?.authorEn}</div>
      )}

      {exhibit?.yearOfCreation && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>Year</div>
          <div>{exhibit?.yearOfCreation}</div>
        </div>
      )}

      {exhibit?.descriptionEn?.json && (
        <div className={styles.description}>
          <div className={styles.descriptionName}>Description</div>
          <div>{documentToReactComponents(exhibit?.descriptionEn?.json)}</div>
        </div>
      )}
    </article>
  )
}
