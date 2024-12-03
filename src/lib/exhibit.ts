import { getClient } from './ApolloClient';
import { GetExhibitDocument } from '../__generated__/graphql';

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
