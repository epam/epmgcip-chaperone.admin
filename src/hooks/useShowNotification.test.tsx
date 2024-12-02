import { showNotification } from "@mantine/notifications";
import { renderHook } from "@testing-library/react";
import { useTranslations } from "next-intl";

import { NotificationType } from "@/enums/Notification";
import { useShowNotification } from "./useShowNotification";

jest.mock("@mantine/notifications", () => ({
  showNotification: jest.fn(),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}));

describe("useShowNotification", () => {
  const tMock = jest.fn((key) => key);

  beforeEach(() => {
    (useTranslations as jest.Mock).mockReturnValue(tMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should show a success notification with default title", () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      type: NotificationType.Success,
      message: "Success message",
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: 5000,
      message: "Success message",
      title: "popup.title.success",
      withBorder: true,
      color: "green",
    });
  });

  it("should show an error notification with default title and autoClose false", () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      type: NotificationType.Error,
      message: "Error message",
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: false,
      message: "Error message",
      title: "popup.title.error",
      withBorder: true,
      color: "red",
    });
  });

  it("should show a notification with a custom title", () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      type: NotificationType.Success,
      message: "Success message",
      title: "Custom title",
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: 5000,
      message: "Success message",
      title: "Custom title",
      withBorder: true,
      color: "green",
    });
  });

  it("should show a notification with custom autoClose", () => {
    const { result } = renderHook(() => useShowNotification());

    result.current({
      type: NotificationType.Success,
      message: "Success message",
      autoClose: 3000,
    });

    expect(showNotification).toHaveBeenCalledWith({
      autoClose: 3000,
      message: "Success message",
      title: "popup.title.success",
      withBorder: true,
      color: "green",
    });
  });
});
