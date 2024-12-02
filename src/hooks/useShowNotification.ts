import { NotificationData, showNotification } from "@mantine/notifications";
import { MessageKeys, NestedKeyOf, useTranslations } from "next-intl";
import { useCallback } from "react";

import { NotificationType } from "@/enums";

interface ShowNotificationProps extends NotificationData {
  type: NotificationType;
}

const notificationColorsDict: Record<NotificationType, string> = {
  [NotificationType.Success]: "green",
  [NotificationType.Error]: "red",
};

const titleKeysDict: Record<
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
        title: title || t(titleKeysDict[type]),
        withBorder: true,
        color: notificationColorsDict[type],
        ...params,
      });
    },
    [t],
  );

  return handler;
};
