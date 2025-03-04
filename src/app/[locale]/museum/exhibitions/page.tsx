import Exhibitions from '@/components/pages/Exhibitions/Exhibitions';
import {
  exhibitionsLimitPerPage,
  exhibitionsDefaultOffset,
  exhibitionsRelatedItemsLimit,
  exhibitionsDefaultSearchValue,
} from '@/constants/pagination';
import { getClient } from '@/lib/apolloServer';
import { getImagePreviewExhibitsByIds } from '@/lib/exhibit';
import { getExhibitions } from '@/lib/exhibition';
import {
  getExhibitsIdsFromExhibitions,
  mergeExhibitsImagesPreviewsIntoExhibitions,
} from '@/utils/exhibitions';

export default async function ExhibitionsPage() {
  const client = getClient();

  const { total, exhibitions } = await getExhibitions(client)(
    exhibitionsDefaultSearchValue,
    exhibitionsLimitPerPage,
    exhibitionsDefaultOffset,
    exhibitionsRelatedItemsLimit,
  );

  const exhibitsIds = getExhibitsIdsFromExhibitions(exhibitions);
  const exhibitsImagesPreviews = await getImagePreviewExhibitsByIds(client)(exhibitsIds);

  const mergedExhibitions = mergeExhibitsImagesPreviewsIntoExhibitions(
    exhibitions,
    exhibitsImagesPreviews,
  );

  return (
    <Exhibitions
      exhibitionsAmountPerPage={exhibitionsLimitPerPage}
      totalExhibitionsAmount={total}
      exhibitions={mergedExhibitions}
    />
  );
}
