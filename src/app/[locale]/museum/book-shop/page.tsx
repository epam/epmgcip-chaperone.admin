import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function ShopPage() {
  const page = await getPage(SLUGS.shop);

  return page && <Page page={page} />;
}
