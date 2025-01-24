import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function HistoryPage() {
  const page = await getPage(SLUGS.history);

  return page && <Page page={page} />;
}
