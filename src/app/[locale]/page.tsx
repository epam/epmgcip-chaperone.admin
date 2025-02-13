import { getClient } from '@/lib/apolloServer';
import { getTopLatestExhibits } from '@/lib/exhibit';

import HomePage from '../../components/pages/Home/Home';

const topLatestExhibitsLimit = 10;

export default async function Home() {
  const client = getClient();

  const topLatestExhibits = await getTopLatestExhibits(client, topLatestExhibitsLimit);

  return <HomePage exhibits={topLatestExhibits} />;
}
