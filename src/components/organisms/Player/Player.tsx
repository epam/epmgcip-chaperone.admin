import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.scss";
import { useTranslations } from "next-intl";
import styles from "./Player.module.scss";
import PlayerButton from "../../atoms/PlayerButton/PlayerButton";

interface Props {
  url: string;
}

export default function Player({ url }: Props) {
  const t = useTranslations();

  return (
    <AudioPlayer
      customIcons={{
        play: PlayerButton({
          iconUrl: "/svg/play.svg",
          iconAlt: t("playAudioguide"),
          text: t("playAudioguide"),
        }),
        pause: PlayerButton({
          iconUrl: "/svg/pause.svg",
          iconAlt: t("pause"),
          text: t("playAudioguide"),
        }),
        forward: <img className={styles.icon} src="/svg/forward.svg" alt={t("forward")} />,
        rewind: <img className={styles.icon} src="/svg/rewind.svg" alt={t("rewind")} />,
      }}
      layout="stacked-reverse"
      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
      showDownloadProgress={false}
      src={url}
    />
  );
}
