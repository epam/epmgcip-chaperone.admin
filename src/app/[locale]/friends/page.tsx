import Page from '@/components/pages/Page/Page';
import { getPage } from '@/lib/page';
import getLastUrlSegment from '@/utils/getLastUrlSegment';

export default async function FriendsPage() {
  const lastUrlSegment = getLastUrlSegment();
  const page = await getPage(lastUrlSegment);

  return page && <Page page={page} />;
}
