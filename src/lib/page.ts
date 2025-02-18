import IPage from '@/interfaces/IPage';
import { Logger } from '@/utils/logger';

import { getClient } from './apolloServer';
import { GetPageDocument } from '../__generated__/graphql';

export async function getPage(slug: string): Promise<IPage | null> {
  try {
    const { data } = await getClient().query({
      query: GetPageDocument,
      variables: { slug },
    });

    return data.pageCollection?.items[0] as IPage;
  } catch (error) {
    Logger.logError('Failed to fetch page', error);
  }

  return null;
}
