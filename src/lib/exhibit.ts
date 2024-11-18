import { GetExhibitDocument, GetTopLatestExhibitsDocument } from "../__generated__/graphql";
import { getClient } from "./ApolloClient";

export async function getExhibit(slug: string) {
  try {
    const { data } = await getClient().query({
      query: GetExhibitDocument,
      variables: { slug },
    });

    return data.exhibitCollection?.items[0];
  } catch (error) {
    console.error("Failed to fetch exhibit");
  }
}

export async function getTopLatestExhibits(limit: number) {
  try {
    const { data } = await getClient().query({
      query: GetTopLatestExhibitsDocument,
      variables: { limit },
    });

    return data.exhibitCollection?.items ?? [];
  } catch (error) {
    console.error("Failed to fetch exhibit: ", error);
  }
}
