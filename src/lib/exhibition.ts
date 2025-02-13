import { ApolloClient } from '@apollo/client';

import { GetExhibitionsDocument } from '@/__generated__/graphql';
import { IExhibitionContentModel } from '@/interfaces/IExhibitionContentModel';
import { Logger } from '@/utils/logger';

export async function getExhibitions(
  client: ApolloClient<unknown>,
  limit: number,
  offset: number,
  relatedItemsLimit: number,
): Promise<{ total: number; exhibitions: IExhibitionContentModel[] }> {
  try {
    const { data } = await client.query({
      query: GetExhibitionsDocument,
      variables: { limit, referencesLimit: relatedItemsLimit, skip: offset },
    });

    return {
      exhibitions: data.exhibitionsCollection?.items as IExhibitionContentModel[],
      total: data.exhibitionsCollection?.total ?? 0,
    };
  } catch (error) {
    Logger.logError('Failed to fetch exhibitions', error);
  }

  return { exhibitions: [], total: 0 };
}
