'use client';

import { useEffect, useState } from 'react';

import { useLocale } from 'next-intl';
import { useShallow } from 'zustand/react/shallow';

import IExhibit from '@/interfaces/IExhibit';
import { LocaleCodeCamelcase } from '@/locales';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

import { ExhibitDetails } from './ExhibitDetails';
import { ExhibitNotFoundMessage } from './ExhibitNotFoundMessage';
import triggerGtagVisit from '../../../gtag/visit';
import useImageGalleryStore from '../../../stores/useImageGalleryStore';

interface Props {
  exhibit: IExhibit;
  slug: string;
}

export default function ExhibitPage({ exhibit, slug }: Props) {
  const {
    setId: setGalleryId,
    setIsOpen: setIsOpenGallery,
    setIsOpeningWithZoom: setIsOpeningGalleryWithZoom,
    setZoom: setGalleryZoom,
  } = useImageGalleryStore(
    useShallow((state) => ({
      setId: state.setId,
      setIsOpen: state.setIsOpen,
      setIsOpeningWithZoom: state.setIsOpeningWithZoom,
      setZoom: state.setZoom,
    })),
  );
  const locale = capitalizeFirstLetter(useLocale()) as LocaleCodeCamelcase;
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    if (exhibit?.sys.id && slug && currentLocale) {
      triggerGtagVisit(exhibit.sys.id, currentLocale, slug);
    }
  }, [exhibit?.sys.id, slug, currentLocale]);

  useEffect((): void => {
    const initGalleryZoomWithSelectedImage = (href: string): void => {
      const params = new URLSearchParams(new URL(href).search);
      const idString = params.get('imageId') || '';
      const xString = params.get('x');
      const yString = params.get('y');
      const zoomString = params.get('zoom');
      const x = xString ? parseInt(xString, 10) : 0;
      const y = yString ? parseInt(yString, 10) : 0;
      const zoom = zoomString ? parseInt(zoomString, 10) : 0;

      setIsOpeningGalleryWithZoom(true);
      setGalleryId(idString);
      setGalleryZoom(zoom, x, y);
      setIsOpenGallery(true);
    };

    const clickEventListener = (e: MouseEvent): void => {
      const { href } = e?.target as HTMLAnchorElement;

      if (!href.includes('imageId')) {
        return;
      }

      e.preventDefault();

      initGalleryZoomWithSelectedImage(href);
    };

    document
      .getElementById('exhibit-description')
      ?.querySelectorAll('a')
      .forEach((link) => {
        link.addEventListener('click', clickEventListener);
      });
  });

  const title = exhibit[`name${currentLocale}`];

  if (!title) {
    return <ExhibitNotFoundMessage exhibit={exhibit} setLocale={setCurrentLocale} />;
  }

  return <ExhibitDetails exhibit={exhibit} selectedLocale={locale} />;
}
