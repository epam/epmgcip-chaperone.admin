import Exhibit from '@/components/pages/Exhibit/Exhibit';
import { getClient } from '@/lib/apolloServer';
import { getExhibit } from '@/lib/exhibit';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ExhibitPage({ params: { slug } }: Props) {
  const client = getClient();
  const exhibit = await getExhibit(client, slug);

  return <>{exhibit && <Exhibit exhibit={exhibit} slug={slug} />}</>;
}
