export interface ITopLatestExhibit {
  sys: {
    id: string;
  };
  slug: string;
  nameEn?: string | null;
  nameRu?: string | null;
  nameUz?: string | null;
  nameKa?: string | null;
  imagesCollection: {
    items: Array<{
      url: string;
      sys: {
        id: string;
      };
    }>;
  };
}
