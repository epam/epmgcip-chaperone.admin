import { Document } from '@contentful/rich-text-types';

import { IRichTextEditorLinks } from './IRichTextEditorLinks';

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
    links: undefined | IRichTextEditorLinks;
  } | null;
  descriptionRu?: {
    json: undefined | Document;
    links: undefined | IRichTextEditorLinks;
  } | null;
  descriptionUz?: {
    json: undefined | Document;
    links: undefined | IRichTextEditorLinks;
  } | null;
  descriptionKa?: {
    json: undefined | Document;
    links: undefined | IRichTextEditorLinks;
  } | null;
}
