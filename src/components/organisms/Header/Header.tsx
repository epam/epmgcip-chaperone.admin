"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Header.module.scss";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/image/logo.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();

  const onClickLogo = (): void => {
    router.push(`/${locale}`);
  };

  return (
    <div className={styles.header} data-testid="header-component">
      <Image src={logo} width={68} alt={t("logo")} className={styles.logo} onClick={onClickLogo} />

      <LanguageSwitcher />
    </div>
  );
}
