import { BLOCKS } from '@contentful/rich-text-types';

import { IExhibition } from '@/interfaces/IExhibition';

export const exhibitionItem: IExhibition = {
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
  exhibitionsImages: [
    {
      clickUrl: 'exhibit/sea-storm',
      id: '14pQJnCdWfPg7xsCKn1qpt',
      url: 'https://example.com/sea-storm.png',
    },
    {
      clickUrl: 'exhibit/bears-on-glade',
      id: '4dRrY0pSesrb6JaFR5ub47',
      url: 'https://example.com/bears-on-glade.png',
    },
  ],
  nameEn: 'Gallery Collection 1',
  nameKa: null,
  nameRu: null,
  nameUz: null,
  referencesCollection: {
    items: [
      {
        sys: {
          id: '14pQJnCdWfPg7xsCKn1qpt',
        },
      },
      {
        sys: {
          id: '2ktwTJViADmmsUcv9cRKGL',
        },
      },
    ],
  },
  sys: {
    id: '2ktwTJViADmmsUcv9cRKGL',
  },
};
