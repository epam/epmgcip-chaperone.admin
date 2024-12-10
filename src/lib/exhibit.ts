import { IPreviewExhibit } from '@/interfaces/IPreviewExhibit';

import { getClient } from './ApolloClient';
import { GetExhibitDocument, GetTopLatestExhibitsDocument } from '../__generated__/graphql';

export async function getExhibit(slug: string) {
  try {
    const { data } = await getClient().query({
      query: GetExhibitDocument,
      variables: { slug },
    });

    return data.exhibitCollection?.items[0];
  } catch (error) {
    console.error('Failed to fetch exhibit', error);
  }
}

export async function getTopLatestExhibits(limit: number): Promise<IPreviewExhibit[]> {
  try {
    const { data } = await getClient().query({
      query: GetTopLatestExhibitsDocument,
      variables: { limit },
    });

    return (data.exhibitCollection?.items as IPreviewExhibit[]) ?? [];
  } catch (error) {
    console.error('Failed to fetch top latest exhibits: ', error);
  }

  return [];
}
