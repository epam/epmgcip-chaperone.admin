import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.scss";
import { useTranslations } from "next-intl";
import styles from "./Player.module.scss";
import PlayerButton from "../../atoms/PlayerButton/PlayerButton";
import PlayIcon from "../../../assets/svg/play.svg";
import PauseIcon from "../../../assets/svg/pause.svg";
import ForwardIcon from "../../../assets/svg/forward.svg";
import RewindIcon from "../../../assets/svg/rewind.svg";

interface Props {
  url: string;
}

export default function Player({ url }: Props) {
  const t = useTranslations();

  return (
    <AudioPlayer
      customIcons={{
        play: PlayerButton({
          icon: PlayIcon,
          text: t("playAudioguide"),
        }),
        pause: PlayerButton({
          icon: PauseIcon,
          text: t("playAudioguide"),
        }),
        forward: <ForwardIcon className={styles.icon} />,
        rewind: <RewindIcon className={styles.icon} />,
      }}
      layout="stacked-reverse"
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
      showDownloadProgress={false}
      src={url}
    />
  );
}
