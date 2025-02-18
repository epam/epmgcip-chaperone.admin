import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    }),
  });
};
