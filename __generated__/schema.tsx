import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
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
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
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
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
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

/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type Exhibit = Entry & {
  __typename?: 'Exhibit';
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


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAudioFileEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAudioFileKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAudioFileRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAudioFileUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAuthorEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAuthorKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAuthorRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitAuthorUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitDescriptionEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitDescriptionKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitDescriptionRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitDescriptionUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitNameEnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitNameKaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitNameRuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitNameUzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
export type ExhibitSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/50ih877ahihm/content_types/exhibit) */
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
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
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
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
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
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
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
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
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
};


export type ExhibitLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

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

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  exhibit?: Maybe<Exhibit>;
  exhibitCollection?: Maybe<ExhibitCollection>;
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

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
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

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type GetExhibitQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetExhibitQuery = { __typename?: 'Query', exhibitCollection?: { __typename?: 'ExhibitCollection', items: Array<{ __typename?: 'Exhibit', nameEn?: string | null, authorEn?: string | null, yearOfCreation?: string | null, descriptionEn?: { __typename?: 'ExhibitDescriptionEn', json: any, links: { __typename?: 'ExhibitDescriptionEnLinks', entries: { __typename?: 'ExhibitDescriptionEnEntries', inline: Array<{ __typename?: 'Exhibit', sys: { __typename?: 'Sys', id: string } } | null> } } } | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };


export const GetExhibitDocument = gql`
    query GetExhibit($slug: String!) {
  exhibitCollection(limit: 1, where: {slug: $slug}) {
    items {
      nameEn
      authorEn
      yearOfCreation
      descriptionEn {
        json
        links {
          entries {
            inline {
              sys {
                id
              }
            }
          }
        }
      }
      imagesCollection(limit: 5) {
        items {
          url
          sys {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetExhibitQuery__
 *
 * To run a query within a React component, call `useGetExhibitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExhibitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExhibitQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetExhibitQuery(baseOptions: Apollo.QueryHookOptions<GetExhibitQuery, GetExhibitQueryVariables> & ({ variables: GetExhibitQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExhibitQuery, GetExhibitQueryVariables>(GetExhibitDocument, options);
      }
export function useGetExhibitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExhibitQuery, GetExhibitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExhibitQuery, GetExhibitQueryVariables>(GetExhibitDocument, options);
        }
export function useGetExhibitSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetExhibitQuery, GetExhibitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExhibitQuery, GetExhibitQueryVariables>(GetExhibitDocument, options);
        }
export type GetExhibitQueryHookResult = ReturnType<typeof useGetExhibitQuery>;
export type GetExhibitLazyQueryHookResult = ReturnType<typeof useGetExhibitLazyQuery>;
export type GetExhibitSuspenseQueryHookResult = ReturnType<typeof useGetExhibitSuspenseQuery>;
export type GetExhibitQueryResult = Apollo.QueryResult<GetExhibitQuery, GetExhibitQueryVariables>;