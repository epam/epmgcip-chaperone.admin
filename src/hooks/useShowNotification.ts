import { NotificationData, showNotification } from "@mantine/notifications";
import { MessageKeys, NestedKeyOf, useTranslations } from "next-intl";
import { useCallback } from "react";

type NotificationType = "success" | "error";

interface ShowNotificationProps extends NotificationData {
  type: NotificationType;
}

const colorsMap: Record<NotificationType, string> = {
  success: "green",
  error: "red",
};

const titleKeysMap: Record<
  NotificationType,
  MessageKeys<IntlMessages, NestedKeyOf<IntlMessages>>
> = {
  success: "popup.title.success",
  error: "popup.title.error",
};

export const useShowNotification = () => {
  const t = useTranslations();

  const handler = useCallback(
    ({ autoClose, message, title, type, ...params }: ShowNotificationProps) => {
      const tk = titleKeysMap[type];
      showNotification({
        autoClose: type === "error" ? false : autoClose,
        message,
        title: title || t(titleKeysMap[type]),
        withBorder: true,
        color: colorsMap[type],
        ...params,
      });
    },
    [t],
  );

  return handler;
};
