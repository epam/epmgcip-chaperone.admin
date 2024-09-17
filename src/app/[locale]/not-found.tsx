import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations();
  return <h1>{t("pageNotFound")}</h1>;
}
