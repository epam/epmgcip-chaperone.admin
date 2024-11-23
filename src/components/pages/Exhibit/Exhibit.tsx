"use client";

import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useShallow } from "zustand/react/shallow";
import styles from "./Exhibit.module.scss";
import ImageGallery from "../../organisms/ImageGallery/ImageGallery";
import Player from "../../organisms/Player/Player";
import triggerGtagVisit from "../../../gtag/visit";
import useImageGalleryStore from "../../../stores/useImageGalleryStore";
import { LocaleCodeCamelcase, localesCamelcase } from "@/locales";
import IExhibit from "@/interfaces/IExhibit";
import { useLocale, useTranslations } from "next-intl";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

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
  const t = useTranslations();
  const locale = capitalizeFirstLetter(useLocale()) as LocaleCodeCamelcase;
  const [currentLocale, setCurrentLocale] = useState(locale);

  const images =
    exhibit?.imagesCollection?.items?.map((i) => ({
      url: i?.url || "",
      id: i?.sys.id || "",
    })) || [];

  const title = exhibit?.[`name${currentLocale}`];
  const author = exhibit?.[`author${currentLocale}`];
  const audioFile = exhibit?.[`audioFile${currentLocale}`]?.url;
  const description = exhibit?.[`description${currentLocale}`]?.json;

  useEffect(() => {
    if (exhibit?.sys.id && slug && currentLocale) {
      triggerGtagVisit(exhibit.sys.id, currentLocale, slug);
    }
  }, [exhibit?.sys.id, slug, currentLocale]);

  useEffect(() => {
    document
      .getElementById("exhibit-description")
      ?.querySelectorAll("a")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          const { href } = e?.target as HTMLAnchorElement;
          if (!href.includes("imageId")) {
            return;
          }

          e.preventDefault();

          const params = new URLSearchParams(new URL(href).search);
          const idString = params.get("imageId") || "";
          const xString = params.get("x");
          const yString = params.get("y");
          const zoomString = params.get("zoom");
          const x = xString ? parseInt(xString, 10) : 0;
          const y = yString ? parseInt(yString, 10) : 0;
          const zoom = zoomString ? parseInt(zoomString, 10) : 0;

          setIsOpeningGalleryWithZoom(true);
          setGalleryId(idString);
          setGalleryZoom(zoom, x, y);
          setIsOpenGallery(true);
        });
      });
  });

  const handleLinkOnClick = (lang: LocaleCodeCamelcase) => {
    setCurrentLocale(lang);
  };

  const links = localesCamelcase
    .filter((lang) => exhibit?.[`name${lang}`])
    .map((lang) => (
      <span key={lang}>
        <button className={styles.link} onClick={() => handleLinkOnClick(lang)}>
          {t(`exhibitNotFound${lang}`)}
        </button>{" "}
      </span>
    ));

  return (
    <>
      {!title && (
        <div className={styles.error}>
          {t("exhibitNotFoundForLanguage")} {links}
        </div>
      )}

      {title && (
        <article className={styles.exhibit} data-testid="exhibit">
          <h2 className={styles.title}>{title}</h2>

          {author && <div className={styles.author}>{author}</div>}

          {images.length > 0 && (
            <div className={styles.gallery}>
              <ImageGallery images={images} isLinkImage={false} displayArrows={false} />
            </div>
          )}

          {audioFile && (
            <div className={styles.audioPlayer}>
              <Player url={audioFile || ""} />
            </div>
          )}

          {exhibit?.yearOfCreation && (
            <div className={styles.description}>
              <div className={styles.descriptionName}>{t("date")}</div>
              <div>{exhibit?.yearOfCreation}</div>
            </div>
          )}

          {description && (
            <div className={styles.description}>
              <div className={styles.descriptionName}>{t("description")}</div>
              <div id="exhibit-description" className={styles.descriptionContent}>
                {documentToReactComponents(description)}
              </div>
            </div>
          )}
        </article>
      )}
    </>
  );
}
