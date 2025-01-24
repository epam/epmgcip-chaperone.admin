import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function VisitsPage() {
  const page = await getPage(SLUGS.visits);

  return page && <Page page={page} />;
}
