import React from "react";

import classnames from "classnames";
import { CustomArrowProps } from "react-slick";

import styles from "./ImageGallery.module.scss";

export enum ArrowDirection {
  Previous = "previous",
  Next = "next",
}

interface Props extends CustomArrowProps {
  direction: ArrowDirection;
}

function ImageGalleryArrow(props: Props): React.ReactElement {
  return (
    <div
      className={classnames(
        props.className,
        styles.slickCustomArrow,
        props.direction == ArrowDirection.Next
          ? styles.slickCustomArrowNext
          : styles.slickCustomArrowPrevious,
      )}
      onClick={props.onClick}
    />
  );
}

export default ImageGalleryArrow;
