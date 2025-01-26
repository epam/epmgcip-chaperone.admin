import Exhibitions from '@/components/pages/Exhibitions/Exhibitions';
import { getExhibitions } from '@/lib/exhibition';

const exhibitionsLimit = 100;
const exhibitionsOffset = 0;
const exhibitionsRelatedItemsLimit = 0;

export default async function ExhibitionsPage() {
  const exhibitions = await getExhibitions(
    exhibitionsLimit,
    exhibitionsOffset,
    exhibitionsRelatedItemsLimit,
  );

  return <Exhibitions exhibitions={exhibitions} />;
}
