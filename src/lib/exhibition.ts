import { GetExhibitionsDocument } from '@/__generated__/graphql';
import { IExhibitionContentModel } from '@/interfaces/IExhibitionContentModel';
import { getClient } from '@/lib/ApolloClient';
import { Logger } from '@/utils/logger';

export async function getExhibitions(
  limit: number,
  offset: number,
  relatedItemsLimit: number,
): Promise<IExhibitionContentModel[]> {
  try {
    const { data } = await getClient().query({
      context: {
        fetchOptions: {
          next: {
            revalidate: 20,
          },
        },
      },
      query: GetExhibitionsDocument,
      variables: { limit, offset, referencesLimit: relatedItemsLimit },
    });

    return data.exhibitionsCollection?.items as IExhibitionContentModel[];
  } catch (error) {
    Logger.logError('Failed to fetch exhibitions', error);
  }

  return [];
}
