import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

export default async function ProjectsPage() {
  const page = await getPage(SLUGS.projects);

  return page && <Page page={page} />;
}
