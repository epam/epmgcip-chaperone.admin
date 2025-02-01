import Exhibitions from '@/components/pages/Exhibitions/Exhibitions';
import { EXHIBIT_URL } from '@/constants/routes';
import { IExhibition } from '@/interfaces/IExhibition';
import { IExhibitionContentModel } from '@/interfaces/IExhibitionContentModel';
import { IImageGalleryImage } from '@/interfaces/IImageGalleryImage';
import { IImagePreviewExhibit } from '@/interfaces/IImagePreviewExhibit';
import { getImagePreviewExhibitsByIds } from '@/lib/exhibit';
import { getExhibitions } from '@/lib/exhibition';

const exhibitionsLimit = 100;
const exhibitionsOffset = 0;
const exhibitionsRelatedItemsLimit = 0;

export default async function ExhibitionsPage() {
  const getExhibitsIdsFromExhibitions = (exhibitionsModels: IExhibitionContentModel[]): string[] =>
    exhibitionsModels
      .map((exhibition) => exhibition.referencesCollection.items.map((exhibit) => exhibit.sys.id))
      .flat();

  const mergeExhibitsImagesPreviewsIntoExhibitions = (
    exhibitionsModels: IExhibitionContentModel[],
    exhibitsImagesPreviews: IImagePreviewExhibit[],
  ): IExhibition[] => {
    const exhibitsImagesPreviewsMap = new Map(
      exhibitsImagesPreviews.map((imagePreview) => [imagePreview.sys.id, imagePreview]),
    );

    return exhibitionsModels.map((exhibition) => ({
      ...exhibition,
      exhibitionsImages: exhibition.referencesCollection.items
        .map((exhibitRef) => {
          const imagePreview = exhibitsImagesPreviewsMap.get(exhibitRef.sys.id);

          if (!imagePreview) {
            return null;
          }

          return {
            clickUrl: `${EXHIBIT_URL}/${imagePreview.slug}`,
            id: imagePreview.sys.id,
            url: imagePreview.imagesCollection.items[0].url,
          } as IImageGalleryImage;
        })
        .filter((imageGalleryItem) => !!imageGalleryItem),
    }));
  };

  const exhibitions = await getExhibitions(
    exhibitionsLimit,
    exhibitionsOffset,
    exhibitionsRelatedItemsLimit,
  );

  const exhibitsIds = getExhibitsIdsFromExhibitions(exhibitions);
  const exhibitsImagesPreviews = await getImagePreviewExhibitsByIds(exhibitsIds);

  const mergedExhibitions = mergeExhibitsImagesPreviewsIntoExhibitions(
    exhibitions,
    exhibitsImagesPreviews,
  );

  return <Exhibitions exhibitions={mergedExhibitions} />;
}
