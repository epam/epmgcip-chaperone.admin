import { create } from 'zustand';

import IImageGalleryState from '../interfaces/IImageGalleryState';

const useImageGalleryStore = create<IImageGalleryState>((set) => ({
  id: undefined,
  isOpen: false,
  isOpeningWithZoom: false,
  setId: (i) => set(() => ({ id: i })),
  setIsOpen: (i) => set(() => ({ isOpen: i })),
  setIsOpeningWithZoom: (i) => set(() => ({ isOpeningWithZoom: i })),
  setZoom: (v, x, y) => set(() => ({ zoomOffsetX: x, zoomOffsetY: y, zoomValue: v })),
  zoomOffsetX: 0,
  zoomOffsetY: 0,
  zoomValue: 0,
}));

export default useImageGalleryStore;
