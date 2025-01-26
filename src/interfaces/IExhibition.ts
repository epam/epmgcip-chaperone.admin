import { Document } from '@contentful/rich-text-types';

export interface IExhibition {
  sys: {
    id: string;
  };
  nameEn: string;
  nameRu?: string | null;
  nameUz?: string | null;
  nameKa?: string | null;
  descriptionEn: {
    json: undefined | Document;
  };
  descriptionRu?: {
    json: undefined | Document;
  } | null;
  descriptionUz?: {
    json: undefined | Document;
  } | null;
  descriptionKa?: {
    json: undefined | Document;
  } | null;
  referencesCollection: {
    items: Array<{
      sys: {
        id: string;
      };
    }>;
  };
}
