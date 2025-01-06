import { showNotification } from '@mantine/notifications';
import { renderHook } from '@testing-library/react';
import { useTranslations } from 'next-intl';

import { NotificationType } from '@/enums';

import { useShowNotification } from './useShowNotification';

jest.mock('@mantine/notifications', () => ({
  showNotification: jest.fn(),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
}));

describe('useShowNotification', () => {
  const tMock = jest.fn((key) => key);

  beforeEach(() => {
    (useTranslations as jest.Mock).mockReturnValue(tMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show a success notification with default title', () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      message: 'Success message',
      type: NotificationType.Success,
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: 5000,
      color: 'green',
      message: 'Success message',
      title: 'popup.title.success',
      withBorder: true,
    });
  });

  it('should show an error notification with default title and autoClose false', () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      message: 'Error message',
      type: NotificationType.Error,
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: false,
      color: 'red',
      message: 'Error message',
      title: 'popup.title.error',
      withBorder: true,
    });
  });

  it('should show a notification with a custom title', () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      message: 'Success message',
      title: 'Custom title',
      type: NotificationType.Success,
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: 5000,
      color: 'green',
      message: 'Success message',
      title: 'Custom title',
      withBorder: true,
    });
  });

  it('should show a notification with custom autoClose', () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      autoClose: 3000,
      message: 'Success message',
      type: NotificationType.Success,
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: 3000,
      color: 'green',
      message: 'Success message',
      title: 'popup.title.success',
      withBorder: true,
    });
  });
});
