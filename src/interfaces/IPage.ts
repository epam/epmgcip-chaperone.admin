import { Document } from '@contentful/rich-text-types';

export default interface IPage {
  sys: {
    id: string;
  };
  nameEn?: string | null;
  nameRu?: string | null;
  nameUz?: string | null;
  nameKa?: string | null;
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
}
