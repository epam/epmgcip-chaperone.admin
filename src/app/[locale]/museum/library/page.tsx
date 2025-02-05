import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function LibraryPage() {
  const page = await getPage(SLUGS.library);

  return page && <Page page={page} />;
}
