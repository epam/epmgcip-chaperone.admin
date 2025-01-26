import { GetExhibitionsDocument } from '@/__generated__/graphql';
import { IExhibition } from '@/interfaces/IExhibition';
import { getClient } from '@/lib/ApolloClient';
import { Logger } from '@/utils/logger';

export async function getExhibitions(
  limit: number,
  offset: number,
  relatedItemsLimit: number,
): Promise<IExhibition[]> {
  try {
    const { data } = await getClient().query({
      query: GetExhibitionsDocument,
      variables: { limit, offset, referencesLimit: relatedItemsLimit },
    });

    return data.exhibitionsCollection?.items as IExhibition[];
  } catch (error) {
    Logger.logError('Failed to fetch exhibitions', error);
  }

  return [];
}
