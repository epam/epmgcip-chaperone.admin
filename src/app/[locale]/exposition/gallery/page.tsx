import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function GalleryPage() {
  const page = await getPage(SLUGS.gallery);

  return page && <Page page={page} />;
}
