import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function RestorationPage() {
  const page = await getPage(SLUGS.restoration);

  return page && <Page page={page} />;
}
