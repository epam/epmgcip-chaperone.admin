import { NotificationData, showNotification } from "@mantine/notifications";
import { MessageKeys, NestedKeyOf, useTranslations } from "next-intl";
import { useCallback } from "react";

import { NotificationType } from "@/enums";

interface ShowNotificationProps extends NotificationData {
  type: NotificationType;
}

const colorsMap: Record<NotificationType, string> = {
  [NotificationType.Success]: "green",
  [NotificationType.Error]: "red",
};

const titleKeysMap: Record<
  NotificationType,
  MessageKeys<IntlMessages, NestedKeyOf<IntlMessages>>
> = {
  [NotificationType.Success]: "popup.title.success",
  [NotificationType.Error]: "popup.title.error",
};

const POPUP_AUTO_CLOSE_TIMEOUT = 5000;

export const useShowNotification = () => {
  const t = useTranslations();

  const handler = useCallback(
    ({ autoClose, message, title, type, ...params }: ShowNotificationProps) => {
      showNotification({
        autoClose: type === NotificationType.Error ? false : autoClose || POPUP_AUTO_CLOSE_TIMEOUT,
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
