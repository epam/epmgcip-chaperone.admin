import React from 'react';

import clsx from 'clsx';
import { CustomArrowProps } from 'react-slick';

import styles from './ImageGallery.module.scss';

export enum ArrowDirection {
  Previous = 'previous',
  Next = 'next',
}

interface Props extends CustomArrowProps {
  direction: ArrowDirection;
}

function ImageGalleryArrow(props: Props): React.ReactElement {
  return (
    <div
      className={clsx(
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
