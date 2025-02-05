import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function ExpositionPage() {
  const page = await getPage(SLUGS.exposition);

  return page && <Page page={page} />;
}
