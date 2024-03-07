import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { I18nextProvider } from 'react-i18next'
import { MockedProvider } from '@apollo/client/testing'
import i18n from './i18n.ts'
import App from './App.tsx'
import { exhibitMockEmptySlug } from './mocks/exhibit.ts'

describe('App', () => {
  test('renders', async () => {
    render(
      <MockedProvider mocks={exhibitMockEmptySlug} addTypename={false}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </MockedProvider>,
    )

    await waitFor(() =>
      expect(screen.getByTestId('app-component')).toBeInTheDocument(),
    )
  })
})
