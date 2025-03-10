import { useRef, useState } from 'react';

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

import { useMobileView, useTabletView } from '@/hooks';
import { IImageGalleryImage } from '@/interfaces/IImageGalleryImage';
import { Logger } from '@/utils/logger';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ImageGallery.module.scss';
import ImageGalleryArrow, { ArrowDirection } from './ImageGalleryArrow';
import { BREAKPOINT_TABLE } from '../../../constants/breakpoints';
import useImageGalleryStore from '../../../stores/useImageGalleryStore';

interface Props {
  images: IImageGalleryImage[];
  isLinkImage: boolean;
}

const slidesToShow = 3;

export default function ImageGallery({ images, isLinkImage }: Props) {
  const zoomRef = useRef<ZoomRef>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
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
  const isMobile = useMobileView();
  const isTablet = useTabletView();

  const handleOnImageClick = (index: string) => (): void => {
    setIsOpeningWithZoom(true);
    setGalleryId(index);
    setIsOpen(true);
  };

  const handleOnCloseLightbox = () => {
    setIsOpen(false);
  };

  const onSlideLinkClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
    }
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
            <Link
              className={styles.lightboxImage}
              href={image.clickUrl!}
              onClick={onSlideLinkClick}
            >
              {galleryImage}
            </Link>
          ) : (
            <button
              className={styles.lightboxImage}
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
    let wrapperX: number;
    let wrapperY: number;

    if (image.height > window.innerHeight && image.width < window.innerWidth) {
      wrapperY = Math.min(innerHeight - padding * 2, image.height);
      wrapperX = wrapperY * aspectRatio;
    } else {
      wrapperX = Math.min(innerWidth - padding * 2, image.width);
      wrapperY = wrapperX / aspectRatio;
    }

    return { wrapperX, wrapperY };
  };

  const calculateTranslationOffsets = ({
    wrapperX,
    wrapperY,
    translateX,
    translateY,
    zoom,
  }: {
    wrapperX: number;
    wrapperY: number;
    translateX: number;
    translateY: number;
    zoom: number;
  }) => {
    const wrapperOffset = 100;
    const translateOffset = 50;

    const yetAnotherReactLightboxShift = 1 - 1 / zoom;
    const offsetX =
      ((wrapperX / wrapperOffset) * (translateX - translateOffset)) / yetAnotherReactLightboxShift;
    const offsetY =
      ((wrapperY / wrapperOffset) * (translateY - translateOffset)) / yetAnotherReactLightboxShift;

    return { offsetX, offsetY };
  };

  const onEnterLightbox = async (): Promise<void> => {
    if (isOpeningWithZoom) {
      const imageUrl = images.find((image) => image.id === galleryId)?.url || '';

      if (!imageUrl) {
        Logger.logError('Image URL not found.');

        return;
      }

      const currentImage = await loadImage(imageUrl);
      const { wrapperX, wrapperY } = determineWrapperDimensions(currentImage, carouselPadding);
      const { offsetX, offsetY } = calculateTranslationOffsets({
        translateX: zoomOffsetX,
        translateY: zoomOffsetY,
        wrapperX,
        wrapperY,
        zoom: zoomValue,
      });

      zoomRef.current?.changeZoom(zoomValue, true, offsetX, offsetY);
    }

    setZoom(0, 0, 0);
    setIsOpeningWithZoom(false);
  };

  const onBeforeSlideChange = () => {
    setIsDragging(true);
  };

  const onAfterSlideChange = (index: number) => {
    setIsDragging(false);
    setCurrentSlideIndex(index);
  };

  const prevArrow =
    currentSlideIndex > 0 ? <ImageGalleryArrow direction={ArrowDirection.Previous} /> : <></>;
  const nextArrow =
    currentSlideIndex < images.length - slidesToShow ? (
      <ImageGalleryArrow direction={ArrowDirection.Next} />
    ) : (
      <></>
    );

  return (
    <>
      <Slider
        swipeToSlide
        infinite={false}
        centerPadding="28px"
        slidesToShow={slidesToShow}
        className="image-gallery"
        arrows={!isMobile && !isTablet}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
        responsive={[
          {
            breakpoint: BREAKPOINT_TABLE,
            settings: {
              centerMode: true,
              slidesToShow: 1,
            },
          },
        ]}
        beforeChange={onBeforeSlideChange}
        afterChange={onAfterSlideChange}
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
        on={{ entered: onEnterLightbox }}
        className={clsx(isOpeningWithZoom && 'image-gallery-zooming')}
      />
    </>
  );
}
