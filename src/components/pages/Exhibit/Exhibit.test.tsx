import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { I18nextProvider } from 'react-i18next'
import { MockedProvider } from '@apollo/client/testing'
import i18n from '../../../i18n'
import Exhibit from './Exhibit.tsx'
import {
  exhibitErrorMock,
  exhibitMock,
  exhibitMockAnotherLanguage,
  slug,
} from '../../../mocks/exhibit.ts'

describe('Exhibit', () => {
  it('renders', async () => {
    render(
      <MockedProvider mocks={exhibitMock} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <Exhibit slug={slug} />
        </I18nextProvider>
      </MockedProvider>,
    )

    await waitFor(() =>
      expect(screen.getByTestId('exhibit')).toBeInTheDocument(),
    )
  })

  it('renders exhibit details', async () => {
    const { getByText, container } = render(
      <MockedProvider mocks={exhibitMock} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <Exhibit slug={slug} />
        </I18nextProvider>
      </MockedProvider>,
    )

    await waitFor(() => {
      expect(getByText('Test Exhibit')).toBeInTheDocument()
      expect(getByText('Test Author')).toBeInTheDocument()
      expect(container.querySelector('audio')).toHaveAttribute(
        'src',
        'https://example.com/audio.mp3',
      )
      expect(getByText('1990')).toBeInTheDocument()
    })
  })

  it('renders error message when exhibit not found', async () => {
    const { getByText } = render(
      <MockedProvider mocks={exhibitErrorMock} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <Exhibit slug={slug} />
        </I18nextProvider>
      </MockedProvider>,
    )

    await waitFor(() => {
      expect(getByText('Exhibit not found')).toBeInTheDocument()
    })
  })

  it('renders error message when exhibit for selected language not found', async () => {
    const { getByText } = render(
      <MockedProvider mocks={exhibitMockAnotherLanguage} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <Exhibit slug={slug} />
        </I18nextProvider>
      </MockedProvider>,
    )

    await waitFor(() => {
      expect(getByText('Russian')).toBeInTheDocument()
      expect(getByText('Uzbek')).toBeInTheDocument()
      expect(getByText('Karakalpak')).toBeInTheDocument()
    })
  })
})
