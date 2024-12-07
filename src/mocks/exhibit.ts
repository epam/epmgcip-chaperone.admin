import { IPreviewExhibit } from '@/interfaces/IPreviewExhibit';

export const exhibitItem = {
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
      content: [],
    },
    links: {
      entries: {
        inline: [],
      },
    },
  },
  descriptionKa: {
    json: {
      content: [],
    },
    links: {
      entries: {
        inline: [],
      },
    },
  },
  descriptionRu: {
    json: {
      content: [],
    },
    links: {
      entries: {
        inline: [],
      },
    },
  },
  descriptionUz: {
    json: {
      content: [],
    },
    links: {
      entries: {
        inline: [],
      },
    },
  },
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
