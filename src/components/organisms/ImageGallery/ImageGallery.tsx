import { useRef } from 'react'
import Slider from 'react-slick'
import { useShallow } from 'zustand/react/shallow'
import clsx from 'clsx'
import Lightbox, { ControllerRef, ZoomRef } from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './ImageGallery.module.scss'
import BREAKPOINT_TABLE from '../../../constants/breakpoints.ts'
import useImageGalleryStore from '../../../stores/useImageGalleryStore.ts'

interface Props {
  images: {
    url: string
    id: string
  }[]
}

function ImageGallery({ images }: Props) {
  const zoomRef = useRef<ZoomRef>(null)
  const {
    id: galleryId,
    setId: setGalleryId,
    isOpen,
    setIsOpen,
    isOpeningWithZoom,
    setIsOpeningWithZoom,
    zoomValue,
    zoomOffsetX,
    zoomOffsetY,
    setZoom,
  } = useImageGalleryStore(
    useShallow((state) => ({
      id: state.id,
      setId: state.setId,
      isOpeningWithZoom: state.isOpeningWithZoom,
      isOpen: state.isOpen,
      setIsOpen: state.setIsOpen,
      setIsOpeningWithZoom: state.setIsOpeningWithZoom,
      zoomValue: state.zoomValue,
      zoomOffsetX: state.zoomOffsetX,
      zoomOffsetY: state.zoomOffsetY,
      setZoom: state.setZoom,
    })),
  )
  const lighboxImages = images.map((i) => ({ src: i.url }))
  const ref = useRef<ControllerRef>(null)
  const galleryIndex = images.findIndex((i) => i.id === galleryId)
  const carouselPadding = 16

  const handleOnImageClick = (index: string) => {
    setIsOpeningWithZoom(true)
    setGalleryId(index)
    setIsOpen(true)
  }

  const handleOnCloseLightbox = () => {
    setIsOpen(false)
  }

  const imagesList = images.map((image, index) => (
    <div key={image.id}>
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className={styles.lightboxButton}
          type='button'
          onClick={() => handleOnImageClick(image.id)}
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

      <Lightbox
        open={isOpen}
        close={handleOnCloseLightbox}
        slides={lighboxImages}
        plugins={[Zoom]}
        zoom={{ ref: zoomRef, maxZoomPixelRatio: 20 }}
        index={galleryIndex}
        controller={{ ref }}
        carousel={{
          padding: carouselPadding,
        }}
        on={{
          entered: () => {
            if (isOpeningWithZoom) {
              const currentImage = new Image()
              currentImage.src =
                images.find((i) => i.id === galleryId)?.url || ''
              currentImage.onload = () => {
                // determining the container size for the translate
                const wrapperX =
                  window.innerWidth < currentImage.width
                    ? window.innerWidth - carouselPadding * 2
                    : currentImage.width
                const wrapperY =
                  window.innerHeight < currentImage.height
                    ? window.innerHeight - carouselPadding * 2
                    : currentImage.height

                // removing shifting in the zoom plagin of the yet-another-react-lightbox
                const removeShift = 1 + 1 / zoomValue

                // zoomOffset has top left corner as an origin, but translate will be from center of the screen
                const translateX = zoomOffsetX - 50
                const translateY = zoomOffsetY - 50

                // calculating the shift, considering that 'translateX/Y' is in percentages, but the yet-another-react-lightbox deals with pixels
                const offsetX = (wrapperX / 100) * translateX * removeShift
                const offsetY = (wrapperY / 100) * translateY * removeShift
                zoomRef.current?.changeZoom(zoomValue, true, offsetX, offsetY)
              }
            }
            setZoom(0, 0, 0)
            setIsOpeningWithZoom(false)
          },
        }}
        className={clsx(isOpeningWithZoom && 'image-gallery-zooming')}
      />
    </>
  )
}

export default ImageGallery
