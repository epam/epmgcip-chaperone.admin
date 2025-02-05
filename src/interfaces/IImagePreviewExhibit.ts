export interface IImagePreviewExhibit {
  sys: {
    id: string;
  };
  slug: string;
  image: string;
  imagesCollection: {
    items: Array<{
      url: string;
      sys: {
        id: string;
      };
    }>;
  };
}
