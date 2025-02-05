import { BLOCKS } from '@contentful/rich-text-types';

import IExhibit from '@/interfaces/IExhibit';
import { IPreviewExhibit } from '@/interfaces/IPreviewExhibit';

export const exhibitItem: IExhibit = {
  audioFileEn: {
    url: 'https://example.com/audio.mp3',
  },
  audioFileKa: {
    url: '',
  },
  audioFileRu: {
    url: '',
  },
  audioFileUz: {
    url: '',
  },
  authorEn: 'Test Author',
  authorKa: 'Author Name',
  authorRu: 'Author Name',
  authorUz: 'Author Name',
  descriptionEn: {
    json: {
      content: [
        {
          content: [
            {
              data: {},
              marks: [],
              nodeType: 'text',
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
          ],
          data: {},
          nodeType: BLOCKS.PARAGRAPH,
        },
      ],
      data: {},
      nodeType: BLOCKS.DOCUMENT,
    },
  },
  descriptionKa: null,
  descriptionRu: null,
  descriptionUz: null,
  imagesCollection: {
    items: [
      {
        sys: {
          id: '1',
        },
        url: '/picture.png',
      },
    ],
  },
  nameEn: 'Test Exhibit',
  nameKa: 'Picture',
  nameRu: 'Picture',
  nameUz: 'Picture',
  sys: {
    id: '123',
  },
  yearOfCreation: '1990',
};

export const slug = 'slug-string';

export const exhibitMockAnotherLanguage = {
  nameKa: 'Test Exhibit',
  nameRu: 'Test Exhibit',
  nameUz: 'Test Exhibit',
  sys: {
    id: '123',
  },
};

export const topLatestExhibits: IPreviewExhibit[] = [
  {
    imagesCollection: {
      items: [
        {
          sys: {
            id: '1',
          },
          url: 'http://example.com',
        },
      ],
    },
    nameEn: 'Test Exhibit',
    nameKa: 'Test Exhibit',
    nameRu: 'Test Exhibit',
    nameUz: 'Test Exhibit',
    slug: 'test-exhibit',
    sys: {
      id: '12345',
    },
  },
];
