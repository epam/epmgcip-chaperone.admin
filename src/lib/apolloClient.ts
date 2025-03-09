import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createApolloClient = (
  spaceId: string | null = null,
  accessToken: string | null = null,
) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      headers: {
        Authorization: `Bearer ${accessToken ?? process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId ?? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    }),
  });
};
