import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function FriendsPage() {
  const page = await getPage(SLUGS.friends);

  return page && <Page page={page} />;
}
