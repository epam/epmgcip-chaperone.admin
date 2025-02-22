import { ApolloClient } from '@apollo/client';

import { GetExhibitionsDocument, SearchExhibitionsByTextDocument } from '@/__generated__/graphql';
import { IExhibitionContentModel } from '@/interfaces/IExhibitionContentModel';
import { Logger } from '@/utils/logger';

export function getExhibitions(client: ApolloClient<unknown>) {
  return async (
    limit: number,
    offset: number,
    relatedItemsLimit: number,
  ): Promise<{ total: number; exhibitions: IExhibitionContentModel[] }> => {
    try {
      const { data } = await client.query({
        context: {
          fetchOptions: {
            next: {
              revalidate: 20,
            },
          },
        },
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
  };
}

export function searchExhibitionsByText(client: ApolloClient<unknown>) {
  return async (
    search: string,
    limit: number,
    offset: number,
    relatedItemsLimit: number,
    // eslint-disable-next-line max-params
  ): Promise<{ total: number; exhibitions: IExhibitionContentModel[] }> => {
    try {
      const { data } = await client.query({
        query: SearchExhibitionsByTextDocument,
        variables: { limit, referencesLimit: relatedItemsLimit, search, skip: offset },
      });

      return {
        exhibitions: data.exhibitionsCollection?.items as IExhibitionContentModel[],
        total: data.exhibitionsCollection?.total ?? 0,
      };
    } catch (error) {
      Logger.logError('Failed to search for exhibitions by text', error);
    }

    return { exhibitions: [], total: 0 };
  };
}
