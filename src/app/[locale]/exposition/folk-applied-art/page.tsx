import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function ArtPage() {
  const page = await getPage(SLUGS.art);

  return page && <Page page={page} />;
}
