import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function MuseumPage() {
  const page = await getPage(SLUGS.museum);

  return page && <Page page={page} />;
}
