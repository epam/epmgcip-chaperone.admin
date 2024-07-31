import { create } from 'zustand'
import IImageGalleryState from '../interfaces/IImageGalleryState'

const useImageGalleryStore = create<IImageGalleryState>((set) => ({
  index: 0,
  isOpen: false,
  isOpeningWithZoom: false,
  zoomValue: 0,
  zoomOffsetX: 0,
  zoomOffsetY: 0,
  setIndex: (i) => set(() => ({ index: i })),
  setIsOpen: (i) => set(() => ({ isOpen: i })),
  setIsOpeningWithZoom: (i) => set(() => ({ isOpeningWithZoom: i })),
  setZoom: (v, x, y) =>
    set(() => ({ zoomValue: v, zoomOffsetX: x, zoomOffsety: y })),
}))

export default useImageGalleryStore
