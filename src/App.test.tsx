import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import { GetExhibitDocument } from '../__generated__/schema.tsx'
import App from './App.tsx'

const mocks = [
  {
    request: {
      query: GetExhibitDocument,
      variables: {
        slug: '',
      },
    },
    result: {
      data: {
        exhibitCollection: {
          items: [
            {
              nameEn: 'Picture',
              authorEn: 'Author Name',
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
            },
          ],
        },
      },
    },
  },
]

describe('EventCalendar', () => {
  test('renders', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    )

    await waitFor(() => expect(screen.getByText('Picture')).toBeInTheDocument())
    expect(screen.getByText('Author Name')).toBeInTheDocument()
    expect(screen.getByText('1990')).toBeInTheDocument()
  })
})
