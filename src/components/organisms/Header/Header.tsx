import { useTranslations } from "next-intl";
import styles from "./Header.module.scss";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";

export default function Header() {
  const t = useTranslations();

  return (
    <div className={styles.header} data-testid="header-component">
      <img className={styles.logo} src="/images/logo.png" alt={t("logo")} />
      <LanguageSwitcher />
    </div>
  );
}
