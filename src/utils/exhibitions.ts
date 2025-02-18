import { SLUGS } from '@/constants/slugs';
import { IExhibition } from '@/interfaces/IExhibition';
import { IExhibitionContentModel } from '@/interfaces/IExhibitionContentModel';
import { IImageGalleryImage } from '@/interfaces/IImageGalleryImage';
import { IImagePreviewExhibit } from '@/interfaces/IImagePreviewExhibit';

export const getExhibitsIdsFromExhibitions = (
  exhibitionsModels: IExhibitionContentModel[],
): string[] =>
  exhibitionsModels
    .map((exhibition) => exhibition.referencesCollection.items.map((exhibit) => exhibit.sys.id))
    .flat();

export const mergeExhibitsImagesPreviewsIntoExhibitions = (
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
          clickUrl: `/${SLUGS.exhibit}/${imagePreview.slug}`,
          id: imagePreview.sys.id,
          url: imagePreview.imagesCollection.items[0].url,
        } as IImageGalleryImage;
      })
      .filter((imageGalleryItem) => !!imageGalleryItem),
  }));
};
