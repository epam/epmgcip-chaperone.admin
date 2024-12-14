import { getTopLatestExhibits } from '@/lib/exhibit';

import HomePage from '../../components/pages/Home/Home';

const topLatestExhibitsLimit = 10;

export default async function Home() {
  const topLatestExhibits = await getTopLatestExhibits(topLatestExhibitsLimit);

  return <HomePage exhibits={topLatestExhibits} />;
}
