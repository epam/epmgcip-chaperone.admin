import { useState } from 'react'
import Slider from 'react-slick'
import FsLightbox from 'fslightbox-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './ImageGallery.module.css'
import BREAKPOINT_TABLE from '../../../constants/breakpoints.ts'

interface Props {
  images: {
    url: string
    id: string
  }[]
}

function ImageGallery({ images }: Props) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })
  const lighboxImages = images.map((i) => i.url)

  function openLightbox(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

  const imagesList = images.map((image, index) => (
    <div key={image.id}>
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className={styles.lightboxButton}
          type='button'
          onClick={() => openLightbox(index + 1)}
        >
          <img
            data-testid={`image-gallery-image-${index}`}
            className={styles.image}
            src={image.url}
            alt=''
          />
        </button>
      </div>
    </div>
  ))

  return (
    <>
      <Slider
        swipeToSlide
        infinite={false}
        centerPadding='28px'
        slidesToShow={3}
        responsive={[
          {
            breakpoint: BREAKPOINT_TABLE,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ]}
      >
        {imagesList}
      </Slider>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={lighboxImages}
        slide={lightboxController.slide}
      />
    </>
  )
}

export default ImageGallery
