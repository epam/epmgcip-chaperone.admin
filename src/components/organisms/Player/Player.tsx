import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import './Player.scss'
import styles from './Player.module.scss'
import PlayerButton from '../../atoms/PlayerButton/PlayerButton.tsx'
import playIcon from '../../../assets/play.svg'
import pauseIcon from '../../../assets/pause.svg'
import forwardIcon from '../../../assets/forward.svg'
import rewindIcon from '../../../assets/rewind.svg'

interface Props {
  url: string
}

export default function Player({ url }: Props) {
  return (
    <AudioPlayer
      customIcons={{
        play: PlayerButton({
          iconUrl: playIcon,
          iconAlt: 'play',
          text: 'Play audioguide',
        }),
        pause: PlayerButton({
          iconUrl: pauseIcon,
          iconAlt: 'pause',
          text: 'Play audioguide',
        }),
        forward: (
          <img className={styles.icon} src={forwardIcon} alt='forward' />
        ),
        rewind: <img className={styles.icon} src={rewindIcon} alt='rewind' />,
      }}
      layout='stacked-reverse'
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
      showDownloadProgress={false}
      src={url}
    />
  )
}
