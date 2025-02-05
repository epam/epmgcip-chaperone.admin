import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function ArchaeologyPage() {
  const page = await getPage(SLUGS.archaeology);

  return page && <Page page={page} />;
}
