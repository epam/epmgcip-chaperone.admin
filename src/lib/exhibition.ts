import { GetExhibitionsDocument } from '@/__generated__/graphql';
import { IExhibitionContentModel } from '@/interfaces/IExhibitionContentModel';
import { getClient } from '@/lib/ApolloClient';
import { Logger } from '@/utils/logger';

export async function getExhibitions(
  limit: number,
  offset: number,
  relatedItemsLimit: number,
): Promise<{ total: number; exhibitions: IExhibitionContentModel[] }> {
  try {
    const { data } = await getClient().query({
      query: GetExhibitionsDocument,
      variables: { limit, offset, referencesLimit: relatedItemsLimit },
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
