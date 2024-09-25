export default interface IExhibit {
  sys: {
    id: string;
  };
  nameEn?: string | null;
  nameRu?: string | null;
  nameUz?: string | null;
  nameKa?: string | null;
  authorEn?: string | null;
  authorRu?: string | null;
  authorUz?: string | null;
  authorKa?: string | null;
  yearOfCreation?: string | null;
  descriptionEn?: {
    json: any;
  } | null;
  descriptionRu?: {
    json: any;
  } | null;
  descriptionUz?: {
    json: any;
  } | null;
  descriptionKa?: {
    json: any;
  } | null;
  imagesCollection?: {
    items:
      | ({
          url?: string | null;
          sys: {
            id: string;
          };
        } | null)[]
      | null;
  } | null;
  audioFileEn?: {
    url?: string | null;
  } | null;
  audioFileRu?: {
    url?: string | null;
  } | null;
  audioFileUz?: {
    url?: string | null;
  } | null;
  audioFileKa?: {
    url?: string | null;
  } | null;
}
