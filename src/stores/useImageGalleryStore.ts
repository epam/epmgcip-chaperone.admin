import { create } from 'zustand'
import IImageGalleryState from '../interfaces/IImageGalleryState'

const useImageGalleryStore = create<IImageGalleryState>((set) => ({
  id: undefined,
  isOpen: false,
  isOpeningWithZoom: false,
  zoomValue: 0,
  zoomOffsetX: 0,
  zoomOffsetY: 0,
  setId: (i) => set(() => ({ id: i })),
  setIsOpen: (i) => set(() => ({ isOpen: i })),
  setIsOpeningWithZoom: (i) => set(() => ({ isOpeningWithZoom: i })),
  setZoom: (v, x, y) =>
    set(() => ({ zoomValue: v, zoomOffsetX: x, zoomOffsetY: y })),
}))

export default useImageGalleryStore
