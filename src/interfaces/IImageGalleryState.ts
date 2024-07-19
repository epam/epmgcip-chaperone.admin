interface IImageGalleryState {
  index: number
  isOpen: boolean
  isOpeningWithZoom: boolean
  zoomValue: number
  zoomOffsetX: number
  zoomOffsetY: number
  setIndex: (index: number) => void
  setIsOpen: (isOpen: boolean) => void
  setIsOpeningWithZoom: (i: boolean) => void
  setZoom: (value: number, xOffset: number, yOffset: number) => void
}

export default IImageGalleryState
