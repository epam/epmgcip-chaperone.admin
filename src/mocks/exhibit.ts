import { GetExhibitDocument } from "@/__generated__/graphql";

export const exhibitItem = {
  sys: {
    id: "123",
  },
  nameEn: "Test Exhibit",
  nameRu: "Picture",
  nameUz: "Picture",
  nameKa: "Picture",
  authorEn: "Test Author",
  authorRu: "Author Name",
  authorUz: "Author Name",
  authorKa: "Author Name",
  yearOfCreation: "1990",
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
  imagesCollection: {
    items: [
      {
        url: "./picture.png",
        sys: {
          id: "1",
        },
      },
    ],
  },
  audioFileEn: {
    url: "https://example.com/audio.mp3",
  },
  audioFileRu: {
    url: "",
  },
  audioFileUz: {
    url: "",
  },
  audioFileKa: {
    url: "",
  },
};

export const slug = "slug-string";

export const exhibitMockAnotherLanguage = {
  sys: {
    id: "123",
  },
  nameRu: "Test Exhibit",
  nameUz: "Test Exhibit",
  nameKa: "Test Exhibit",
};
