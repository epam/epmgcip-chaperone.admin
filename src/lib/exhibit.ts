import { ApolloClient } from '@apollo/client';

import IExhibit from '@/interfaces/IExhibit';
import { IImagePreviewExhibit } from '@/interfaces/IImagePreviewExhibit';
import { IPreviewExhibit } from '@/interfaces/IPreviewExhibit';
import { Logger } from '@/utils/logger';

import {
  GetExhibitDocument,
  GetExhibitsImagesByIdsDocument,
  GetTopLatestExhibitsDocument,
} from '../__generated__/graphql';

export async function getExhibit(
  client: ApolloClient<unknown>,
  slug: string,
): Promise<IExhibit | undefined> {
  try {
    const { data } = await client.query({
      query: GetExhibitDocument,
      variables: { slug },
    });

    return data.exhibitCollection?.items[0] as IExhibit;
  } catch (error) {
    Logger.logError('Failed to fetch exhibit', error);
  }

  return undefined;
}

export async function getTopLatestExhibits(
  client: ApolloClient<unknown>,
  limit: number,
): Promise<IPreviewExhibit[]> {
  try {
    const { data } = await client.query({
      query: GetTopLatestExhibitsDocument,
      variables: { limit },
    });

    return (data.exhibitCollection?.items as IPreviewExhibit[]) ?? [];
  } catch (error) {
    Logger.logError('Failed to fetch top latest exhibits: ', error);
  }

  return [];
}

export async function getImagePreviewExhibitsByIds(
  client: ApolloClient<unknown>,
  ids: string[],
): Promise<IImagePreviewExhibit[]> {
  try {
    const { data } = await client.query({
      query: GetExhibitsImagesByIdsDocument,
      variables: { ids },
    });

    return (data.exhibitCollection?.items as IImagePreviewExhibit[]) ?? [];
  } catch (error) {
    Logger.logError('Failed to fetch images preview exhibits: ', error);
  }

  return [];
}
