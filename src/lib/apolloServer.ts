import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

export const { getClient, query } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    }),
  });
});
