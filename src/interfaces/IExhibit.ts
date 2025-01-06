import { Document } from '@contentful/rich-text-types';

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
    json: undefined | Document;
  } | null;
  descriptionRu?: {
    json: undefined | Document;
  } | null;
  descriptionUz?: {
    json: undefined | Document;
  } | null;
  descriptionKa?: {
    json: undefined | Document;
  } | null;
  imagesCollection?: {
    items: Array<{
      url?: string | null;
      sys: {
        id: string;
      };
    } | null> | null;
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
