"use client";

import React, { useMemo } from "react";

import { useTranslations } from "next-intl";

import { ITopLatestExhibit } from "@/interfaces/ITopLatestExhibit";
import { IImageGalleryImage } from "@/interfaces/IImageGalleryImage";

import { useRouter } from "@/navigation";

import ImageGallery from "@/components/organisms/ImageGallery/ImageGallery";

import styles from "./Home.module.scss";

interface Props {
  exhibits: ITopLatestExhibit[];
}

export default function Home(props: Props): React.ReactElement {
  const router = useRouter();
  const t = useTranslations();

  const images: IImageGalleryImage[] = useMemo(
    () =>
      props.exhibits.map((exhibit) => {
        const firstImageItem = exhibit.imagesCollection.items[0];

        return {
          url: firstImageItem.url,
          id: firstImageItem.sys.id,
        };
      }),
    [props.exhibits],
  );

  const onClickImage = (id: string): void => {
    const exhibit = props.exhibits.find(
      (topLatestExhibit) => topLatestExhibit.imagesCollection.items[0].sys.id === id,
    );

    if (!exhibit) {
      return;
    }

    router.push(`exhibit/${exhibit.slug}`);
  };

  return (
    <div>
      <h2 className={styles.title}>{t("homePageTitle")}</h2>

      {images.length > 0 && (
        <div className={styles.gallery}>
          <ImageGallery
            images={images}
            isZoomEnabled={false}
            displayArrows={true}
            onClickImage={onClickImage}
          />
        </div>
      )}
    </div>
  );
}
