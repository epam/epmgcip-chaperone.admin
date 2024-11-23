"use client";

import React, { useMemo } from "react";

import { useLocale, useTranslations } from "next-intl";

import { ITopLatestExhibit } from "@/interfaces/ITopLatestExhibit";
import { IImageGalleryImage } from "@/interfaces/IImageGalleryImage";

import ImageGallery from "@/components/organisms/ImageGallery/ImageGallery";

import styles from "./Home.module.scss";
import { EXHIBIT_URL } from "@/constants/routes";

interface Props {
  exhibits: ITopLatestExhibit[];
}

export default function Home(props: Props): React.ReactElement {
  const t = useTranslations();
  const locale = useLocale();

  const images: IImageGalleryImage[] = useMemo(
    () =>
      props.exhibits
        .filter((exhibit) => !!exhibit.imagesCollection.items.length)
        .map((exhibit) => {
          const firstImageItem = exhibit.imagesCollection.items[0];

          return {
            url: firstImageItem.url,
            id: firstImageItem.sys.id,
            clickUrl: `${locale}${EXHIBIT_URL}/${exhibit.slug}`,
          };
        }),
    [props.exhibits, locale],
  );

  return (
    <div>
      <h2 className={styles.title}>{t("homePageTitle")}</h2>

      {images.length > 0 && (
        <div className={styles.gallery}>
          <ImageGallery images={images} isLinkImage={true} displayArrows={true} />
        </div>
      )}
    </div>
  );
}
