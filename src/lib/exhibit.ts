import IExhibit from '@/interfaces/IExhibit';
import { IImagePreviewExhibit } from '@/interfaces/IImagePreviewExhibit';
import { IPreviewExhibit } from '@/interfaces/IPreviewExhibit';
import { Logger } from '@/utils/logger';

import { getClient } from './ApolloClient';
import {
  GetExhibitDocument,
  GetExhibitsImagesByIdsDocument,
  GetTopLatestExhibitsDocument,
} from '../__generated__/graphql';

export async function getExhibit(slug: string): Promise<IExhibit | undefined> {
  try {
    const { data } = await getClient().query({
      context: {
        fetchOptions: {
          next: {
            revalidate: 20,
          },
        },
      },
      query: GetExhibitDocument,
      variables: { slug },
    });

    return data.exhibitCollection?.items[0] as IExhibit;
  } catch (error) {
    Logger.logError('Failed to fetch exhibit', error);
  }

  return undefined;
}

export async function getTopLatestExhibits(limit: number): Promise<IPreviewExhibit[]> {
  try {
    const { data } = await getClient().query({
      context: {
        fetchOptions: {
          next: {
            revalidate: 20,
          },
        },
      },
      query: GetTopLatestExhibitsDocument,
      variables: { limit },
    });

    return (data.exhibitCollection?.items as IPreviewExhibit[]) ?? [];
  } catch (error) {
    Logger.logError('Failed to fetch top latest exhibits: ', error);
  }

  return [];
}

export async function getImagePreviewExhibitsByIds(ids: string[]): Promise<IImagePreviewExhibit[]> {
  try {
    const { data } = await getClient().query({
      context: {
        fetchOptions: {
          next: {
            revalidate: 20,
          },
        },
      },
      query: GetExhibitsImagesByIdsDocument,
      variables: { ids },
    });

    return (data.exhibitCollection?.items as IImagePreviewExhibit[]) ?? [];
  } catch (error) {
    Logger.logError('Failed to fetch images preview exhibits: ', error);
  }

  return [];
}
