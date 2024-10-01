import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Header.module.scss";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/image/logo.png";

export default function Header() {
  const t = useTranslations();

  return (
    <div className={styles.header} data-testid="header-component">
      <Image src={logo} width={68} alt={t("logo")} />
      <LanguageSwitcher />
    </div>
  );
}
