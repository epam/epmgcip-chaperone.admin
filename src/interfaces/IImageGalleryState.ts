interface IImageGalleryState {
  id: string | undefined
  isOpen: boolean
  isOpeningWithZoom: boolean
  zoomValue: number
  zoomOffsetX: number
  zoomOffsetY: number
  setId: (id: string) => void
  setIsOpen: (isOpen: boolean) => void
  setIsOpeningWithZoom: (i: boolean) => void
  setZoom: (value: number, xOffset: number, yOffset: number) => void
}

export default IImageGalleryState
