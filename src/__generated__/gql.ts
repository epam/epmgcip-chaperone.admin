/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query GetExhibit($slug: String!) {\n  exhibitCollection(limit: 1, where: {slug: $slug}) {\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      authorEn\n      authorRu\n      authorUz\n      authorKa\n      yearOfCreation\n      descriptionEn {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionRu {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionUz {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionKa {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      imagesCollection(limit: 5) {\n        items {\n          url\n          sys {\n            id\n          }\n        }\n      }\n      audioFileEn {\n        url\n      }\n      audioFileRu {\n        url\n      }\n      audioFileUz {\n        url\n      }\n      audioFileKa {\n        url\n      }\n    }\n  }\n}": types.GetExhibitDocument,
    "query GetExhibitions($limit: Int, $skip: Int, $referencesLimit: Int) {\n  exhibitionsCollection(\n    limit: $limit\n    skip: $skip\n    order: nameEn_ASC\n    where: {referencesCollection_exists: true}\n  ) {\n    total\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      descriptionEn {\n        json\n      }\n      descriptionRu {\n        json\n      }\n      descriptionUz {\n        json\n      }\n      descriptionKa {\n        json\n      }\n      referencesCollection(limit: $referencesLimit, order: sys_publishedAt_DESC) {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetExhibitionsDocument,
    "query GetExhibitsImagesByIds($ids: [String]) {\n  exhibitCollection(where: {sys: {id_in: $ids}}) {\n    items {\n      sys {\n        id\n      }\n      slug\n      imagesCollection(limit: 1) {\n        items {\n          sys {\n            id\n          }\n          url\n        }\n      }\n    }\n  }\n}": types.GetExhibitsImagesByIdsDocument,
    "query GetTopLatestExhibits($limit: Int) {\n  exhibitCollection(\n    limit: $limit\n    order: sys_publishedAt_DESC\n    where: {imagesCollection_exists: true}\n  ) {\n    items {\n      sys {\n        id\n      }\n      slug\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      imagesCollection(limit: 1) {\n        items {\n          url\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.GetTopLatestExhibitsDocument,
    "query GetPage($slug: String!) {\n  pageCollection(limit: 1, where: {slug: $slug}) {\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      descriptionEn {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionRu {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionUz {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionKa {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetExhibit($slug: String!) {\n  exhibitCollection(limit: 1, where: {slug: $slug}) {\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      authorEn\n      authorRu\n      authorUz\n      authorKa\n      yearOfCreation\n      descriptionEn {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionRu {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionUz {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionKa {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      imagesCollection(limit: 5) {\n        items {\n          url\n          sys {\n            id\n          }\n        }\n      }\n      audioFileEn {\n        url\n      }\n      audioFileRu {\n        url\n      }\n      audioFileUz {\n        url\n      }\n      audioFileKa {\n        url\n      }\n    }\n  }\n}"): (typeof documents)["query GetExhibit($slug: String!) {\n  exhibitCollection(limit: 1, where: {slug: $slug}) {\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      authorEn\n      authorRu\n      authorUz\n      authorKa\n      yearOfCreation\n      descriptionEn {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionRu {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionUz {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      descriptionKa {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n        }\n      }\n      imagesCollection(limit: 5) {\n        items {\n          url\n          sys {\n            id\n          }\n        }\n      }\n      audioFileEn {\n        url\n      }\n      audioFileRu {\n        url\n      }\n      audioFileUz {\n        url\n      }\n      audioFileKa {\n        url\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetExhibitions($limit: Int, $skip: Int, $referencesLimit: Int) {\n  exhibitionsCollection(\n    limit: $limit\n    skip: $skip\n    order: nameEn_ASC\n    where: {referencesCollection_exists: true}\n  ) {\n    total\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      descriptionEn {\n        json\n      }\n      descriptionRu {\n        json\n      }\n      descriptionUz {\n        json\n      }\n      descriptionKa {\n        json\n      }\n      referencesCollection(limit: $referencesLimit, order: sys_publishedAt_DESC) {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetExhibitions($limit: Int, $skip: Int, $referencesLimit: Int) {\n  exhibitionsCollection(\n    limit: $limit\n    skip: $skip\n    order: nameEn_ASC\n    where: {referencesCollection_exists: true}\n  ) {\n    total\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      descriptionEn {\n        json\n      }\n      descriptionRu {\n        json\n      }\n      descriptionUz {\n        json\n      }\n      descriptionKa {\n        json\n      }\n      referencesCollection(limit: $referencesLimit, order: sys_publishedAt_DESC) {\n        items {\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetExhibitsImagesByIds($ids: [String]) {\n  exhibitCollection(where: {sys: {id_in: $ids}}) {\n    items {\n      sys {\n        id\n      }\n      slug\n      imagesCollection(limit: 1) {\n        items {\n          sys {\n            id\n          }\n          url\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetExhibitsImagesByIds($ids: [String]) {\n  exhibitCollection(where: {sys: {id_in: $ids}}) {\n    items {\n      sys {\n        id\n      }\n      slug\n      imagesCollection(limit: 1) {\n        items {\n          sys {\n            id\n          }\n          url\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTopLatestExhibits($limit: Int) {\n  exhibitCollection(\n    limit: $limit\n    order: sys_publishedAt_DESC\n    where: {imagesCollection_exists: true}\n  ) {\n    items {\n      sys {\n        id\n      }\n      slug\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      imagesCollection(limit: 1) {\n        items {\n          url\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetTopLatestExhibits($limit: Int) {\n  exhibitCollection(\n    limit: $limit\n    order: sys_publishedAt_DESC\n    where: {imagesCollection_exists: true}\n  ) {\n    items {\n      sys {\n        id\n      }\n      slug\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      imagesCollection(limit: 1) {\n        items {\n          url\n          sys {\n            id\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPage($slug: String!) {\n  pageCollection(limit: 1, where: {slug: $slug}) {\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      descriptionEn {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionRu {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionUz {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionKa {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetPage($slug: String!) {\n  pageCollection(limit: 1, where: {slug: $slug}) {\n    items {\n      sys {\n        id\n      }\n      nameEn\n      nameRu\n      nameUz\n      nameKa\n      descriptionEn {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionRu {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionUz {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n      descriptionKa {\n        json\n        links {\n          entries {\n            inline {\n              sys {\n                id\n              }\n            }\n          }\n          assets {\n            block {\n              sys {\n                id\n              }\n              url\n              title\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;