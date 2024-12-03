import 'react-h5-audio-player/lib/styles.css';
import { useTranslations } from 'next-intl';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './Player.scss';

import styles from './Player.module.scss';
import ForwardIcon from '../../../assets/svg/forward.svg';
import PauseIcon from '../../../assets/svg/pause.svg';
import PlayIcon from '../../../assets/svg/play.svg';
import RewindIcon from '../../../assets/svg/rewind.svg';
import PlayerButton from '../../atoms/PlayerButton/PlayerButton';

interface Props {
  url: string;
}

export default function Player({ url }: Props) {
  const t = useTranslations();

  return (
    <AudioPlayer
      customIcons={{
        forward: <ForwardIcon className={styles.icon} />,
        pause: PlayerButton({
          icon: PauseIcon,
          text: t('playAudioguide'),
        }),
        play: PlayerButton({
          icon: PlayIcon,
          text: t('playAudioguide'),
        }),
        rewind: <RewindIcon className={styles.icon} />,
      }}
      layout="stacked-reverse"
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
      showDownloadProgress={false}
      src={url}
    />
  );
}
