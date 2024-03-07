import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { I18nextProvider } from 'react-i18next'
import Player from './Player.tsx'
import i18n from '../../../i18n'

describe('Player', () => {
  const url = 'https://example.com/audio.mp3'

  it('renders audio player with correct source', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <Player url={url} />
      </I18nextProvider>,
    )

    expect(container.querySelector('audio')).toHaveAttribute('src', url)
  })

  it('renders custom buttons', async () => {
    const { getByAltText } = render(
      <I18nextProvider i18n={i18n}>
        <Player url={url} />
      </I18nextProvider>,
    )

    expect(getByAltText('Play audioguide')).toBeInTheDocument()
    expect(getByAltText('Forward')).toBeInTheDocument()
    expect(getByAltText('Rewind')).toBeInTheDocument()
  })
})
