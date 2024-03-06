import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import { GetExhibitDocument } from '../../../../__generated__/schema.tsx'
import Exhibit from './Exhibit.tsx'

const mocks = [
  {
    request: {
      query: GetExhibitDocument,
      variables: {
        slug: 'slug-string',
      },
    },
    result: {
      data: {
        exhibitCollection: {
          items: [
            {
              nameEn: 'Picture',
              nameRu: 'Picture',
              nameUz: 'Picture',
              nameKa: 'Picture',
              authorEn: 'Author Name',
              authorRu: 'Author Name',
              authorUz: 'Author Name',
              authorKa: 'Author Name',
              yearOfCreation: '1990',
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
                    url: './picture.png',
                    sys: {
                      id: '1',
                    },
                  },
                ],
              },
              audioFileEn: {
                url: '',
              },
              audioFileRu: {
                url: '',
              },
              audioFileUz: {
                url: '',
              },
              audioFileKa: {
                url: '',
              },
            },
          ],
        },
      },
    },
  },
]

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => 'Picture',
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      use: () => {},
      language: 'en',
    },
  }),
}))

describe('Exhibit', () => {
  test('renders', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Exhibit slug='slug-string' />
      </MockedProvider>,
    )

    await waitFor(() =>
      expect(screen.getByTestId('exhibit')).toBeInTheDocument(),
    )
  })
})
