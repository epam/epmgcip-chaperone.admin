/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  exhibitCollection?: Maybe<ExhibitCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsExhibitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type Exhibit = Entry & _Node & {
  __typename?: 'Exhibit';
  _id: Scalars['ID']['output'];
  audioFileEn?: Maybe<Asset>;
  audioFileKa?: Maybe<Asset>;
  audioFileRu?: Maybe<Asset>;
  audioFileUz?: Maybe<Asset>;
  authorEn?: Maybe<Scalars['String']['output']>;
  authorKa?: Maybe<Scalars['String']['output']>;
  authorRu?: Maybe<Scalars['String']['output']>;
  authorUz?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  descriptionEn?: Maybe<ExhibitDescriptionEn>;
  descriptionKa?: Maybe<ExhibitDescriptionKa>;
  descriptionRu?: Maybe<ExhibitDescriptionRu>;
  descriptionUz?: Maybe<ExhibitDescriptionUz>;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ExhibitLinkingCollections>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameKa?: Maybe<Scalars['String']['output']>;
  nameRu?: Maybe<Scalars['String']['output']>;
  nameUz?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  yearOfCreation?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAudioFileEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAudioFileKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAudioFileRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAudioFileUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAuthorEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAuthorKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAuthorRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitAuthorUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitDescriptionEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitDescriptionKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitDescriptionRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitDescriptionUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitNameEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitNameKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitNameRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitNameUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibit) */
export type ExhibitYearOfCreationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ExhibitCollection = {
  __typename?: 'ExhibitCollection';
  items: Array<Maybe<Exhibit>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExhibitDescriptionEn = {
  __typename?: 'ExhibitDescriptionEn';
  json: Scalars['JSON']['output'];
  links: ExhibitDescriptionEnLinks;
};

export type ExhibitDescriptionEnAssets = {
  __typename?: 'ExhibitDescriptionEnAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitDescriptionEnEntries = {
  __typename?: 'ExhibitDescriptionEnEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitDescriptionEnLinks = {
  __typename?: 'ExhibitDescriptionEnLinks';
  assets: ExhibitDescriptionEnAssets;
  entries: ExhibitDescriptionEnEntries;
  resources: ExhibitDescriptionEnResources;
};

export type ExhibitDescriptionEnResources = {
  __typename?: 'ExhibitDescriptionEnResources';
  block: Array<ExhibitDescriptionEnResourcesBlock>;
  hyperlink: Array<ExhibitDescriptionEnResourcesHyperlink>;
  inline: Array<ExhibitDescriptionEnResourcesInline>;
};

export type ExhibitDescriptionEnResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitDescriptionEnResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitDescriptionEnResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitDescriptionEnResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitDescriptionEnResourcesInline = ResourceLink & {
  __typename?: 'ExhibitDescriptionEnResourcesInline';
  sys: ResourceSys;
};

export type ExhibitDescriptionKa = {
  __typename?: 'ExhibitDescriptionKa';
  json: Scalars['JSON']['output'];
  links: ExhibitDescriptionKaLinks;
};

export type ExhibitDescriptionKaAssets = {
  __typename?: 'ExhibitDescriptionKaAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitDescriptionKaEntries = {
  __typename?: 'ExhibitDescriptionKaEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitDescriptionKaLinks = {
  __typename?: 'ExhibitDescriptionKaLinks';
  assets: ExhibitDescriptionKaAssets;
  entries: ExhibitDescriptionKaEntries;
  resources: ExhibitDescriptionKaResources;
};

export type ExhibitDescriptionKaResources = {
  __typename?: 'ExhibitDescriptionKaResources';
  block: Array<ExhibitDescriptionKaResourcesBlock>;
  hyperlink: Array<ExhibitDescriptionKaResourcesHyperlink>;
  inline: Array<ExhibitDescriptionKaResourcesInline>;
};

export type ExhibitDescriptionKaResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitDescriptionKaResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitDescriptionKaResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitDescriptionKaResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitDescriptionKaResourcesInline = ResourceLink & {
  __typename?: 'ExhibitDescriptionKaResourcesInline';
  sys: ResourceSys;
};

export type ExhibitDescriptionRu = {
  __typename?: 'ExhibitDescriptionRu';
  json: Scalars['JSON']['output'];
  links: ExhibitDescriptionRuLinks;
};

export type ExhibitDescriptionRuAssets = {
  __typename?: 'ExhibitDescriptionRuAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitDescriptionRuEntries = {
  __typename?: 'ExhibitDescriptionRuEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitDescriptionRuLinks = {
  __typename?: 'ExhibitDescriptionRuLinks';
  assets: ExhibitDescriptionRuAssets;
  entries: ExhibitDescriptionRuEntries;
  resources: ExhibitDescriptionRuResources;
};

export type ExhibitDescriptionRuResources = {
  __typename?: 'ExhibitDescriptionRuResources';
  block: Array<ExhibitDescriptionRuResourcesBlock>;
  hyperlink: Array<ExhibitDescriptionRuResourcesHyperlink>;
  inline: Array<ExhibitDescriptionRuResourcesInline>;
};

export type ExhibitDescriptionRuResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitDescriptionRuResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitDescriptionRuResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitDescriptionRuResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitDescriptionRuResourcesInline = ResourceLink & {
  __typename?: 'ExhibitDescriptionRuResourcesInline';
  sys: ResourceSys;
};

export type ExhibitDescriptionUz = {
  __typename?: 'ExhibitDescriptionUz';
  json: Scalars['JSON']['output'];
  links: ExhibitDescriptionUzLinks;
};

export type ExhibitDescriptionUzAssets = {
  __typename?: 'ExhibitDescriptionUzAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitDescriptionUzEntries = {
  __typename?: 'ExhibitDescriptionUzEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitDescriptionUzLinks = {
  __typename?: 'ExhibitDescriptionUzLinks';
  assets: ExhibitDescriptionUzAssets;
  entries: ExhibitDescriptionUzEntries;
  resources: ExhibitDescriptionUzResources;
};

export type ExhibitDescriptionUzResources = {
  __typename?: 'ExhibitDescriptionUzResources';
  block: Array<ExhibitDescriptionUzResourcesBlock>;
  hyperlink: Array<ExhibitDescriptionUzResourcesHyperlink>;
  inline: Array<ExhibitDescriptionUzResourcesInline>;
};

export type ExhibitDescriptionUzResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitDescriptionUzResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitDescriptionUzResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitDescriptionUzResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitDescriptionUzResourcesInline = ResourceLink & {
  __typename?: 'ExhibitDescriptionUzResourcesInline';
  sys: ResourceSys;
};

export type ExhibitFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExhibitFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExhibitFilter>>>;
  audioFileEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audioFileKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audioFileRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audioFileUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorEn?: InputMaybe<Scalars['String']['input']>;
  authorEn_contains?: InputMaybe<Scalars['String']['input']>;
  authorEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorEn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorEn_not?: InputMaybe<Scalars['String']['input']>;
  authorEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorEn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorKa?: InputMaybe<Scalars['String']['input']>;
  authorKa_contains?: InputMaybe<Scalars['String']['input']>;
  authorKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorKa_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorKa_not?: InputMaybe<Scalars['String']['input']>;
  authorKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorKa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorRu?: InputMaybe<Scalars['String']['input']>;
  authorRu_contains?: InputMaybe<Scalars['String']['input']>;
  authorRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorRu_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorRu_not?: InputMaybe<Scalars['String']['input']>;
  authorRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorRu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorUz?: InputMaybe<Scalars['String']['input']>;
  authorUz_contains?: InputMaybe<Scalars['String']['input']>;
  authorUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorUz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorUz_not?: InputMaybe<Scalars['String']['input']>;
  authorUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorUz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionEn_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameEn_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameEn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameEn_not?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa?: InputMaybe<Scalars['String']['input']>;
  nameKa_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameKa_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa_not?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu?: InputMaybe<Scalars['String']['input']>;
  nameRu_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameRu_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu_not?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz?: InputMaybe<Scalars['String']['input']>;
  nameUz_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameUz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz_not?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  yearOfCreation?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_contains?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  yearOfCreation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  yearOfCreation_not?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_not_contains?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExhibitLinkingCollections = {
  __typename?: 'ExhibitLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  exhibitionsCollection?: Maybe<ExhibitionsCollection>;
};


export type ExhibitLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ExhibitLinkingCollectionsExhibitionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExhibitLinkingCollectionsExhibitionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExhibitLinkingCollectionsExhibitionsCollectionOrder {
  NameEnAsc = 'nameEn_ASC',
  NameEnDesc = 'nameEn_DESC',
  NameKaAsc = 'nameKa_ASC',
  NameKaDesc = 'nameKa_DESC',
  NameRuAsc = 'nameRu_ASC',
  NameRuDesc = 'nameRu_DESC',
  NameUzAsc = 'nameUz_ASC',
  NameUzDesc = 'nameUz_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ExhibitOrder {
  AuthorEnAsc = 'authorEn_ASC',
  AuthorEnDesc = 'authorEn_DESC',
  AuthorKaAsc = 'authorKa_ASC',
  AuthorKaDesc = 'authorKa_DESC',
  AuthorRuAsc = 'authorRu_ASC',
  AuthorRuDesc = 'authorRu_DESC',
  AuthorUzAsc = 'authorUz_ASC',
  AuthorUzDesc = 'authorUz_DESC',
  NameEnAsc = 'nameEn_ASC',
  NameEnDesc = 'nameEn_DESC',
  NameKaAsc = 'nameKa_ASC',
  NameKaDesc = 'nameKa_DESC',
  NameRuAsc = 'nameRu_ASC',
  NameRuDesc = 'nameRu_DESC',
  NameUzAsc = 'nameUz_ASC',
  NameUzDesc = 'nameUz_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  YearOfCreationAsc = 'yearOfCreation_ASC',
  YearOfCreationDesc = 'yearOfCreation_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type Exhibitions = Entry & _Node & {
  __typename?: 'Exhibitions';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  descriptionEn?: Maybe<ExhibitionsDescriptionEn>;
  descriptionKa?: Maybe<ExhibitionsDescriptionKa>;
  descriptionRu?: Maybe<ExhibitionsDescriptionRu>;
  descriptionUz?: Maybe<ExhibitionsDescriptionUz>;
  linkedFrom?: Maybe<ExhibitionsLinkingCollections>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameKa?: Maybe<Scalars['String']['output']>;
  nameRu?: Maybe<Scalars['String']['output']>;
  nameUz?: Maybe<Scalars['String']['output']>;
  referencesCollection?: Maybe<ExhibitionsReferencesCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsDescriptionEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsDescriptionKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsDescriptionRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsDescriptionUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsNameEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsNameKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsNameRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsNameUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/exhibitions) */
export type ExhibitionsReferencesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExhibitionsReferencesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExhibitFilter>;
};

export type ExhibitionsCollection = {
  __typename?: 'ExhibitionsCollection';
  items: Array<Maybe<Exhibitions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExhibitionsDescriptionEn = {
  __typename?: 'ExhibitionsDescriptionEn';
  json: Scalars['JSON']['output'];
  links: ExhibitionsDescriptionEnLinks;
};

export type ExhibitionsDescriptionEnAssets = {
  __typename?: 'ExhibitionsDescriptionEnAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitionsDescriptionEnEntries = {
  __typename?: 'ExhibitionsDescriptionEnEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitionsDescriptionEnLinks = {
  __typename?: 'ExhibitionsDescriptionEnLinks';
  assets: ExhibitionsDescriptionEnAssets;
  entries: ExhibitionsDescriptionEnEntries;
  resources: ExhibitionsDescriptionEnResources;
};

export type ExhibitionsDescriptionEnResources = {
  __typename?: 'ExhibitionsDescriptionEnResources';
  block: Array<ExhibitionsDescriptionEnResourcesBlock>;
  hyperlink: Array<ExhibitionsDescriptionEnResourcesHyperlink>;
  inline: Array<ExhibitionsDescriptionEnResourcesInline>;
};

export type ExhibitionsDescriptionEnResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionEnResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionEnResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionEnResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionEnResourcesInline = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionEnResourcesInline';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionKa = {
  __typename?: 'ExhibitionsDescriptionKa';
  json: Scalars['JSON']['output'];
  links: ExhibitionsDescriptionKaLinks;
};

export type ExhibitionsDescriptionKaAssets = {
  __typename?: 'ExhibitionsDescriptionKaAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitionsDescriptionKaEntries = {
  __typename?: 'ExhibitionsDescriptionKaEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitionsDescriptionKaLinks = {
  __typename?: 'ExhibitionsDescriptionKaLinks';
  assets: ExhibitionsDescriptionKaAssets;
  entries: ExhibitionsDescriptionKaEntries;
  resources: ExhibitionsDescriptionKaResources;
};

export type ExhibitionsDescriptionKaResources = {
  __typename?: 'ExhibitionsDescriptionKaResources';
  block: Array<ExhibitionsDescriptionKaResourcesBlock>;
  hyperlink: Array<ExhibitionsDescriptionKaResourcesHyperlink>;
  inline: Array<ExhibitionsDescriptionKaResourcesInline>;
};

export type ExhibitionsDescriptionKaResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionKaResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionKaResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionKaResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionKaResourcesInline = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionKaResourcesInline';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionRu = {
  __typename?: 'ExhibitionsDescriptionRu';
  json: Scalars['JSON']['output'];
  links: ExhibitionsDescriptionRuLinks;
};

export type ExhibitionsDescriptionRuAssets = {
  __typename?: 'ExhibitionsDescriptionRuAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitionsDescriptionRuEntries = {
  __typename?: 'ExhibitionsDescriptionRuEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitionsDescriptionRuLinks = {
  __typename?: 'ExhibitionsDescriptionRuLinks';
  assets: ExhibitionsDescriptionRuAssets;
  entries: ExhibitionsDescriptionRuEntries;
  resources: ExhibitionsDescriptionRuResources;
};

export type ExhibitionsDescriptionRuResources = {
  __typename?: 'ExhibitionsDescriptionRuResources';
  block: Array<ExhibitionsDescriptionRuResourcesBlock>;
  hyperlink: Array<ExhibitionsDescriptionRuResourcesHyperlink>;
  inline: Array<ExhibitionsDescriptionRuResourcesInline>;
};

export type ExhibitionsDescriptionRuResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionRuResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionRuResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionRuResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionRuResourcesInline = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionRuResourcesInline';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionUz = {
  __typename?: 'ExhibitionsDescriptionUz';
  json: Scalars['JSON']['output'];
  links: ExhibitionsDescriptionUzLinks;
};

export type ExhibitionsDescriptionUzAssets = {
  __typename?: 'ExhibitionsDescriptionUzAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExhibitionsDescriptionUzEntries = {
  __typename?: 'ExhibitionsDescriptionUzEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExhibitionsDescriptionUzLinks = {
  __typename?: 'ExhibitionsDescriptionUzLinks';
  assets: ExhibitionsDescriptionUzAssets;
  entries: ExhibitionsDescriptionUzEntries;
  resources: ExhibitionsDescriptionUzResources;
};

export type ExhibitionsDescriptionUzResources = {
  __typename?: 'ExhibitionsDescriptionUzResources';
  block: Array<ExhibitionsDescriptionUzResourcesBlock>;
  hyperlink: Array<ExhibitionsDescriptionUzResourcesHyperlink>;
  inline: Array<ExhibitionsDescriptionUzResourcesInline>;
};

export type ExhibitionsDescriptionUzResourcesBlock = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionUzResourcesBlock';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionUzResourcesHyperlink = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionUzResourcesHyperlink';
  sys: ResourceSys;
};

export type ExhibitionsDescriptionUzResourcesInline = ResourceLink & {
  __typename?: 'ExhibitionsDescriptionUzResourcesInline';
  sys: ResourceSys;
};

export type ExhibitionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExhibitionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExhibitionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionEn_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameEn_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameEn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameEn_not?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa?: InputMaybe<Scalars['String']['input']>;
  nameKa_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameKa_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa_not?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu?: InputMaybe<Scalars['String']['input']>;
  nameRu_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameRu_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu_not?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz?: InputMaybe<Scalars['String']['input']>;
  nameUz_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameUz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz_not?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  references?: InputMaybe<CfExhibitNestedFilter>;
  referencesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ExhibitionsLinkingCollections = {
  __typename?: 'ExhibitionsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ExhibitionsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExhibitionsOrder {
  NameEnAsc = 'nameEn_ASC',
  NameEnDesc = 'nameEn_DESC',
  NameKaAsc = 'nameKa_ASC',
  NameKaDesc = 'nameKa_DESC',
  NameRuAsc = 'nameRu_ASC',
  NameRuDesc = 'nameRu_DESC',
  NameUzAsc = 'nameUz_ASC',
  NameUzDesc = 'nameUz_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ExhibitionsReferencesCollection = {
  __typename?: 'ExhibitionsReferencesCollection';
  items: Array<Maybe<Exhibit>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ExhibitionsReferencesCollectionOrder {
  AuthorEnAsc = 'authorEn_ASC',
  AuthorEnDesc = 'authorEn_DESC',
  AuthorKaAsc = 'authorKa_ASC',
  AuthorKaDesc = 'authorKa_DESC',
  AuthorRuAsc = 'authorRu_ASC',
  AuthorRuDesc = 'authorRu_DESC',
  AuthorUzAsc = 'authorUz_ASC',
  AuthorUzDesc = 'authorUz_DESC',
  NameEnAsc = 'nameEn_ASC',
  NameEnDesc = 'nameEn_DESC',
  NameKaAsc = 'nameKa_ASC',
  NameKaDesc = 'nameKa_DESC',
  NameRuAsc = 'nameRu_ASC',
  NameRuDesc = 'nameRu_DESC',
  NameUzAsc = 'nameUz_ASC',
  NameUzDesc = 'nameUz_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  YearOfCreationAsc = 'yearOfCreation_ASC',
  YearOfCreationDesc = 'yearOfCreation_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  descriptionEn?: Maybe<PageDescriptionEn>;
  descriptionKa?: Maybe<PageDescriptionKa>;
  descriptionRu?: Maybe<PageDescriptionRu>;
  descriptionUz?: Maybe<PageDescriptionUz>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameKa?: Maybe<Scalars['String']['output']>;
  nameRu?: Maybe<Scalars['String']['output']>;
  nameUz?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageDescriptionEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageDescriptionKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageDescriptionRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageDescriptionUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageNameEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageNameKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageNameRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageNameUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/yr8vqo1e1y1l/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageDescriptionEn = {
  __typename?: 'PageDescriptionEn';
  json: Scalars['JSON']['output'];
  links: PageDescriptionEnLinks;
};

export type PageDescriptionEnAssets = {
  __typename?: 'PageDescriptionEnAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageDescriptionEnEntries = {
  __typename?: 'PageDescriptionEnEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageDescriptionEnLinks = {
  __typename?: 'PageDescriptionEnLinks';
  assets: PageDescriptionEnAssets;
  entries: PageDescriptionEnEntries;
  resources: PageDescriptionEnResources;
};

export type PageDescriptionEnResources = {
  __typename?: 'PageDescriptionEnResources';
  block: Array<PageDescriptionEnResourcesBlock>;
  hyperlink: Array<PageDescriptionEnResourcesHyperlink>;
  inline: Array<PageDescriptionEnResourcesInline>;
};

export type PageDescriptionEnResourcesBlock = ResourceLink & {
  __typename?: 'PageDescriptionEnResourcesBlock';
  sys: ResourceSys;
};

export type PageDescriptionEnResourcesHyperlink = ResourceLink & {
  __typename?: 'PageDescriptionEnResourcesHyperlink';
  sys: ResourceSys;
};

export type PageDescriptionEnResourcesInline = ResourceLink & {
  __typename?: 'PageDescriptionEnResourcesInline';
  sys: ResourceSys;
};

export type PageDescriptionKa = {
  __typename?: 'PageDescriptionKa';
  json: Scalars['JSON']['output'];
  links: PageDescriptionKaLinks;
};

export type PageDescriptionKaAssets = {
  __typename?: 'PageDescriptionKaAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageDescriptionKaEntries = {
  __typename?: 'PageDescriptionKaEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageDescriptionKaLinks = {
  __typename?: 'PageDescriptionKaLinks';
  assets: PageDescriptionKaAssets;
  entries: PageDescriptionKaEntries;
  resources: PageDescriptionKaResources;
};

export type PageDescriptionKaResources = {
  __typename?: 'PageDescriptionKaResources';
  block: Array<PageDescriptionKaResourcesBlock>;
  hyperlink: Array<PageDescriptionKaResourcesHyperlink>;
  inline: Array<PageDescriptionKaResourcesInline>;
};

export type PageDescriptionKaResourcesBlock = ResourceLink & {
  __typename?: 'PageDescriptionKaResourcesBlock';
  sys: ResourceSys;
};

export type PageDescriptionKaResourcesHyperlink = ResourceLink & {
  __typename?: 'PageDescriptionKaResourcesHyperlink';
  sys: ResourceSys;
};

export type PageDescriptionKaResourcesInline = ResourceLink & {
  __typename?: 'PageDescriptionKaResourcesInline';
  sys: ResourceSys;
};

export type PageDescriptionRu = {
  __typename?: 'PageDescriptionRu';
  json: Scalars['JSON']['output'];
  links: PageDescriptionRuLinks;
};

export type PageDescriptionRuAssets = {
  __typename?: 'PageDescriptionRuAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageDescriptionRuEntries = {
  __typename?: 'PageDescriptionRuEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageDescriptionRuLinks = {
  __typename?: 'PageDescriptionRuLinks';
  assets: PageDescriptionRuAssets;
  entries: PageDescriptionRuEntries;
  resources: PageDescriptionRuResources;
};

export type PageDescriptionRuResources = {
  __typename?: 'PageDescriptionRuResources';
  block: Array<PageDescriptionRuResourcesBlock>;
  hyperlink: Array<PageDescriptionRuResourcesHyperlink>;
  inline: Array<PageDescriptionRuResourcesInline>;
};

export type PageDescriptionRuResourcesBlock = ResourceLink & {
  __typename?: 'PageDescriptionRuResourcesBlock';
  sys: ResourceSys;
};

export type PageDescriptionRuResourcesHyperlink = ResourceLink & {
  __typename?: 'PageDescriptionRuResourcesHyperlink';
  sys: ResourceSys;
};

export type PageDescriptionRuResourcesInline = ResourceLink & {
  __typename?: 'PageDescriptionRuResourcesInline';
  sys: ResourceSys;
};

export type PageDescriptionUz = {
  __typename?: 'PageDescriptionUz';
  json: Scalars['JSON']['output'];
  links: PageDescriptionUzLinks;
};

export type PageDescriptionUzAssets = {
  __typename?: 'PageDescriptionUzAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageDescriptionUzEntries = {
  __typename?: 'PageDescriptionUzEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageDescriptionUzLinks = {
  __typename?: 'PageDescriptionUzLinks';
  assets: PageDescriptionUzAssets;
  entries: PageDescriptionUzEntries;
  resources: PageDescriptionUzResources;
};

export type PageDescriptionUzResources = {
  __typename?: 'PageDescriptionUzResources';
  block: Array<PageDescriptionUzResourcesBlock>;
  hyperlink: Array<PageDescriptionUzResourcesHyperlink>;
  inline: Array<PageDescriptionUzResourcesInline>;
};

export type PageDescriptionUzResourcesBlock = ResourceLink & {
  __typename?: 'PageDescriptionUzResourcesBlock';
  sys: ResourceSys;
};

export type PageDescriptionUzResourcesHyperlink = ResourceLink & {
  __typename?: 'PageDescriptionUzResourcesHyperlink';
  sys: ResourceSys;
};

export type PageDescriptionUzResourcesInline = ResourceLink & {
  __typename?: 'PageDescriptionUzResourcesInline';
  sys: ResourceSys;
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionEn_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameEn_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameEn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameEn_not?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa?: InputMaybe<Scalars['String']['input']>;
  nameKa_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameKa_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa_not?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu?: InputMaybe<Scalars['String']['input']>;
  nameRu_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameRu_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu_not?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz?: InputMaybe<Scalars['String']['input']>;
  nameUz_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameUz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz_not?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageOrder {
  NameEnAsc = 'nameEn_ASC',
  NameEnDesc = 'nameEn_DESC',
  NameKaAsc = 'nameKa_ASC',
  NameKaDesc = 'nameKa_DESC',
  NameRuAsc = 'nameRu_ASC',
  NameRuDesc = 'nameRu_DESC',
  NameUzAsc = 'nameUz_ASC',
  NameUzDesc = 'nameUz_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  exhibit?: Maybe<Exhibit>;
  exhibitCollection?: Maybe<ExhibitCollection>;
  exhibitions?: Maybe<Exhibitions>;
  exhibitionsCollection?: Maybe<ExhibitionsCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExhibitArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExhibitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExhibitOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExhibitFilter>;
};


export type QueryExhibitionsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExhibitionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExhibitionsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExhibitionsFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfExhibitNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfExhibitNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfExhibitNestedFilter>>>;
  audioFileEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audioFileKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audioFileRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  audioFileUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorEn?: InputMaybe<Scalars['String']['input']>;
  authorEn_contains?: InputMaybe<Scalars['String']['input']>;
  authorEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorEn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorEn_not?: InputMaybe<Scalars['String']['input']>;
  authorEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorEn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorKa?: InputMaybe<Scalars['String']['input']>;
  authorKa_contains?: InputMaybe<Scalars['String']['input']>;
  authorKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorKa_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorKa_not?: InputMaybe<Scalars['String']['input']>;
  authorKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorKa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorRu?: InputMaybe<Scalars['String']['input']>;
  authorRu_contains?: InputMaybe<Scalars['String']['input']>;
  authorRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorRu_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorRu_not?: InputMaybe<Scalars['String']['input']>;
  authorRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorRu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorUz?: InputMaybe<Scalars['String']['input']>;
  authorUz_contains?: InputMaybe<Scalars['String']['input']>;
  authorUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorUz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorUz_not?: InputMaybe<Scalars['String']['input']>;
  authorUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorUz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionEn_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  nameEn_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameEn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameEn_not?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameEn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa?: InputMaybe<Scalars['String']['input']>;
  nameKa_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameKa_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameKa_not?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameKa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu?: InputMaybe<Scalars['String']['input']>;
  nameRu_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameRu_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRu_not?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameRu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz?: InputMaybe<Scalars['String']['input']>;
  nameUz_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameUz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameUz_not?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameUz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  yearOfCreation?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_contains?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  yearOfCreation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  yearOfCreation_not?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_not_contains?: InputMaybe<Scalars['String']['input']>;
  yearOfCreation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetExhibitQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetExhibitQuery = { __typename?: 'Query', exhibitCollection?: { __typename?: 'ExhibitCollection', items: Array<{ __typename?: 'Exhibit', nameEn?: string | null, nameRu?: string | null, nameUz?: string | null, nameKa?: string | null, authorEn?: string | null, authorRu?: string | null, authorUz?: string | null, authorKa?: string | null, yearOfCreation?: string | null, sys: { __typename?: 'Sys', id: string }, descriptionEn?: { __typename?: 'ExhibitDescriptionEn', json: any, links: { __typename?: 'ExhibitDescriptionEnLinks', entries: { __typename?: 'ExhibitDescriptionEnEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> } } } | null, descriptionRu?: { __typename?: 'ExhibitDescriptionRu', json: any, links: { __typename?: 'ExhibitDescriptionRuLinks', entries: { __typename?: 'ExhibitDescriptionRuEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> } } } | null, descriptionUz?: { __typename?: 'ExhibitDescriptionUz', json: any, links: { __typename?: 'ExhibitDescriptionUzLinks', entries: { __typename?: 'ExhibitDescriptionUzEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> } } } | null, descriptionKa?: { __typename?: 'ExhibitDescriptionKa', json: any, links: { __typename?: 'ExhibitDescriptionKaLinks', entries: { __typename?: 'ExhibitDescriptionKaEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> } } } | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, audioFileEn?: { __typename?: 'Asset', url?: string | null } | null, audioFileRu?: { __typename?: 'Asset', url?: string | null } | null, audioFileUz?: { __typename?: 'Asset', url?: string | null } | null, audioFileKa?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetExhibitionsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  referencesLimit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetExhibitionsQuery = { __typename?: 'Query', exhibitionsCollection?: { __typename?: 'ExhibitionsCollection', total: number, items: Array<{ __typename?: 'Exhibitions', nameEn?: string | null, nameRu?: string | null, nameUz?: string | null, nameKa?: string | null, sys: { __typename?: 'Sys', id: string }, descriptionEn?: { __typename?: 'ExhibitionsDescriptionEn', json: any } | null, descriptionRu?: { __typename?: 'ExhibitionsDescriptionRu', json: any } | null, descriptionUz?: { __typename?: 'ExhibitionsDescriptionUz', json: any } | null, descriptionKa?: { __typename?: 'ExhibitionsDescriptionKa', json: any } | null, referencesCollection?: { __typename?: 'ExhibitionsReferencesCollection', items: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type GetExhibitsImagesByIdsQueryVariables = Exact<{
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetExhibitsImagesByIdsQuery = { __typename?: 'Query', exhibitCollection?: { __typename?: 'ExhibitCollection', items: Array<{ __typename?: 'Exhibit', slug?: string | null, sys: { __typename?: 'Sys', id: string }, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type GetTopLatestExhibitsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTopLatestExhibitsQuery = { __typename?: 'Query', exhibitCollection?: { __typename?: 'ExhibitCollection', items: Array<{ __typename?: 'Exhibit', slug?: string | null, nameEn?: string | null, nameRu?: string | null, nameUz?: string | null, nameKa?: string | null, sys: { __typename?: 'Sys', id: string }, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', nameEn?: string | null, nameRu?: string | null, nameUz?: string | null, nameKa?: string | null, sys: { __typename?: 'Sys', id: string }, descriptionEn?: { __typename?: 'PageDescriptionEn', json: any, links: { __typename?: 'PageDescriptionEnLinks', entries: { __typename?: 'PageDescriptionEnEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'PageDescriptionEnAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, descriptionRu?: { __typename?: 'PageDescriptionRu', json: any, links: { __typename?: 'PageDescriptionRuLinks', entries: { __typename?: 'PageDescriptionRuEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'PageDescriptionRuAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, descriptionUz?: { __typename?: 'PageDescriptionUz', json: any, links: { __typename?: 'PageDescriptionUzLinks', entries: { __typename?: 'PageDescriptionUzEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'PageDescriptionUzAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, descriptionKa?: { __typename?: 'PageDescriptionKa', json: any, links: { __typename?: 'PageDescriptionKaLinks', entries: { __typename?: 'PageDescriptionKaEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Exhibitions', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'PageDescriptionKaAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };


export const GetExhibitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExhibit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exhibitCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameRu"}},{"kind":"Field","name":{"kind":"Name","value":"nameUz"}},{"kind":"Field","name":{"kind":"Name","value":"nameKa"}},{"kind":"Field","name":{"kind":"Name","value":"authorEn"}},{"kind":"Field","name":{"kind":"Name","value":"authorRu"}},{"kind":"Field","name":{"kind":"Name","value":"authorUz"}},{"kind":"Field","name":{"kind":"Name","value":"authorKa"}},{"kind":"Field","name":{"kind":"Name","value":"yearOfCreation"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionRu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionUz"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionKa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"audioFileEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audioFileRu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audioFileUz"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audioFileKa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetExhibitQuery, GetExhibitQueryVariables>;
export const GetExhibitionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExhibitions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referencesLimit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exhibitionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"nameEn_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nameEn_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nameRu_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nameUz_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nameKa_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"referencesCollection_exists"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameRu"}},{"kind":"Field","name":{"kind":"Name","value":"nameUz"}},{"kind":"Field","name":{"kind":"Name","value":"nameKa"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionRu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionUz"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionKa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referencesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referencesLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"sys_publishedAt_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetExhibitionsQuery, GetExhibitionsQueryVariables>;
export const GetExhibitsImagesByIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExhibitsImagesByIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exhibitCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sys"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetExhibitsImagesByIdsQuery, GetExhibitsImagesByIdsQueryVariables>;
export const GetTopLatestExhibitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopLatestExhibits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exhibitCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"sys_publishedAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"imagesCollection_exists"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameRu"}},{"kind":"Field","name":{"kind":"Name","value":"nameUz"}},{"kind":"Field","name":{"kind":"Name","value":"nameKa"}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTopLatestExhibitsQuery, GetTopLatestExhibitsQueryVariables>;
export const GetPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameRu"}},{"kind":"Field","name":{"kind":"Name","value":"nameUz"}},{"kind":"Field","name":{"kind":"Name","value":"nameKa"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionRu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionUz"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"descriptionKa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>;