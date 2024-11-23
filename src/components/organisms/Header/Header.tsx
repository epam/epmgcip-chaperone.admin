"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Header.module.scss";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/image/logo.png";
import { Link } from "@/navigation";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className={styles.header} data-testid="header-component">
      <Link href={locale}>
        <Image src={logo} width={68} alt={t("logo")} className={styles.logo} />
      </Link>

      <LanguageSwitcher />
    </div>
  );
}
