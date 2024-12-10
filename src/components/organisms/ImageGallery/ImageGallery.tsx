import { useRef } from 'react';

import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'yet-another-react-lightbox/styles.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import Lightbox, { ControllerRef, ZoomRef } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { useShallow } from 'zustand/react/shallow';

import { IImageGalleryImage } from '@/interfaces/IImageGalleryImage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ImageGallery.module.scss';
import ImageGalleryArrow, { ArrowDirection } from './ImageGalleryArrow';
import BREAKPOINT_TABLE from '../../../constants/breakpoints';
import useImageGalleryStore from '../../../stores/useImageGalleryStore';

interface Props {
  displayArrows: boolean;
  images: IImageGalleryImage[];
  isLinkImage: boolean;
}

function ImageGallery({ images, displayArrows, isLinkImage }: Props) {
  const zoomRef = useRef<ZoomRef>(null);
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
      isOpen: state.isOpen,
      isOpeningWithZoom: state.isOpeningWithZoom,
      setId: state.setId,
      setIsOpen: state.setIsOpen,
      setIsOpeningWithZoom: state.setIsOpeningWithZoom,
      setZoom: state.setZoom,
      zoomOffsetX: state.zoomOffsetX,
      zoomOffsetY: state.zoomOffsetY,
      zoomValue: state.zoomValue,
    })),
  );
  const lightboxImages = images.map((i) => ({ src: i.url }));
  const ref = useRef<ControllerRef>(null);
  const galleryIndex = images.findIndex((i) => i.id === galleryId);
  const carouselPadding = 16;

  const handleOnImageClick = (index: string) => (): void => {
    setIsOpeningWithZoom(true);
    setGalleryId(index);
    setIsOpen(true);
  };

  const handleOnCloseLightbox = () => {
    setIsOpen(false);
  };

  const imagesList = images.map((image, index) => {
    const galleryImage = (
      <Image
        data-testid={`image-gallery-image-${index}`}
        className={styles.image}
        src={image.url}
        alt="picture"
        fill
      />
    );

    return (
      <div key={image.id}>
        <div className={styles.imageWrapper}>
          {isLinkImage ? (
            <Link className={styles.lightboxImage} href={image.clickUrl!}>
              {galleryImage}
            </Link>
          ) : (
            <button
              className={styles.lightboxButton}
              type="button"
              onClick={handleOnImageClick(image.id)}
            >
              {galleryImage}
            </button>
          )}
        </div>
      </div>
    );
  });

  const loadImage = (url: string) => {
    const image = new window.Image();
    image.src = url;

    return new Promise<HTMLImageElement>((resolve) => {
      image.onload = () => resolve(image);
    });
  };

  const determineWrapperDimensions = (
    image: { width: number; height: number },
    padding: number,
  ) => {
    const { innerWidth, innerHeight } = window;
    const aspectRatio = image.width / image.height;
    let wrapperX = 0;
    let wrapperY = 0;

    if (image.height > window.innerHeight && image.width < window.innerWidth) {
      wrapperY = Math.min(innerHeight - padding * 2, image.height);
      wrapperX = wrapperY * aspectRatio;
    } else {
      wrapperX = Math.min(innerWidth - padding * 2, image.width);
      wrapperY = wrapperX / aspectRatio;
    }

    return { wrapperX, wrapperY };
  };

  function calculateTranslationOffsets(
    wrapperX: number,
    wrapperY: number,
    translateX: number,
    translateY: number,
    zoom: number,
  ) {
    const yetAnotherReactLightboxShift = 1 - 1 / zoom;
    const offsetX = ((wrapperX / 100) * (translateX - 50)) / yetAnotherReactLightboxShift;
    const offsetY = ((wrapperY / 100) * (translateY - 50)) / yetAnotherReactLightboxShift;

    return { offsetX, offsetY };
  }

  return (
    <>
      <Slider
        swipeToSlide
        infinite={false}
        centerPadding="28px"
        slidesToShow={3}
        className="image-gallery"
        arrows={displayArrows}
        prevArrow={<ImageGalleryArrow direction={ArrowDirection.Previous} />}
        nextArrow={<ImageGalleryArrow direction={ArrowDirection.Next} />}
        responsive={[
          {
            breakpoint: BREAKPOINT_TABLE,
            settings: {
              centerMode: true,
              slidesToShow: 1,
            },
          },
        ]}
      >
        {imagesList}
      </Slider>

      <Lightbox
        open={isOpen}
        close={handleOnCloseLightbox}
        slides={lightboxImages}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 20, ref: zoomRef }}
        index={galleryIndex}
        controller={{ ref }}
        carousel={{
          padding: carouselPadding,
        }}
        on={{
          entered: async () => {
            if (isOpeningWithZoom) {
              const imageUrl = images.find((image) => image.id === galleryId)?.url || '';
              if (!imageUrl) {
                console.error('Image URL not found.');

                return;
              }

              const currentImage = await loadImage(imageUrl);
              const { wrapperX, wrapperY } = determineWrapperDimensions(
                currentImage,
                carouselPadding,
              );
              const { offsetX, offsetY } = calculateTranslationOffsets(
                wrapperX,
                wrapperY,
                zoomOffsetX,
                zoomOffsetY,
                zoomValue,
              );

              zoomRef.current?.changeZoom(zoomValue, true, offsetX, offsetY);
            }
            setZoom(0, 0, 0);
            setIsOpeningWithZoom(false);
          },
        }}
        className={clsx(isOpeningWithZoom && 'image-gallery-zooming')}
      />
    </>
  );
}

export default ImageGallery;
