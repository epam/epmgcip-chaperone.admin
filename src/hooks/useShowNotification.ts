import { useCallback } from 'react';

import { NotificationData, showNotification } from '@mantine/notifications';
import { MessageKeys, NestedKeyOf, useTranslations } from 'next-intl';

import { NotificationType } from '@/enums';

interface ShowNotificationProps extends NotificationData {
  type: NotificationType;
}

const notificationColorsDict: Record<NotificationType, string> = {
  [NotificationType.Error]: 'red',
  [NotificationType.Success]: 'green',
};

const titleKeysDict: Record<
  NotificationType,
  MessageKeys<IntlMessages, NestedKeyOf<IntlMessages>>
> = {
  [NotificationType.Error]: 'popup.title.error',
  [NotificationType.Success]: 'popup.title.success',
};

const POPUP_AUTO_CLOSE_TIMEOUT = 5000;

export const useShowNotification = () => {
  const t = useTranslations();

  const handler = useCallback(
    ({ autoClose, message, title, type, ...params }: ShowNotificationProps) => {
      showNotification({
        autoClose: type === NotificationType.Error ? false : autoClose || POPUP_AUTO_CLOSE_TIMEOUT,
        color: notificationColorsDict[type],
        message,
        title: title || t(titleKeysDict[type]),
        withBorder: true,
        ...params,
      });
    },
    [t],
  );

  return handler;
};
