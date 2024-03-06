import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import './Player.scss'
import { useTranslation } from 'react-i18next'
import styles from './Player.module.scss'
import PlayerButton from '../../atoms/PlayerButton/PlayerButton.tsx'
import playIcon from '../../../assets/svg/play.svg'
import pauseIcon from '../../../assets/svg/pause.svg'
import forwardIcon from '../../../assets/svg/forward.svg'
import rewindIcon from '../../../assets/svg/rewind.svg'

interface Props {
  url: string
}

export default function Player({ url }: Props) {
  const { t } = useTranslation()

  return (
    <AudioPlayer
      customIcons={{
        play: PlayerButton({
          iconUrl: playIcon,
          iconAlt: t('playAudioguide'),
          text: t('playAudioguide'),
        }),
        pause: PlayerButton({
          iconUrl: pauseIcon,
          iconAlt: t('pause'),
          text: t('playAudioguide'),
        }),
        forward: (
          <img className={styles.icon} src={forwardIcon} alt={t('forward')} />
        ),
        rewind: (
          <img className={styles.icon} src={rewindIcon} alt={t('rewind')} />
        ),
      }}
      layout='stacked-reverse'
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
      showDownloadProgress={false}
      src={url}
    />
  )
}
