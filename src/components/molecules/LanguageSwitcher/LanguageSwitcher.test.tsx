import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../../messages/en.json";

Storage.prototype.setItem = jest.fn();

const replaceMock = jest.fn();

jest.mock("@/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: (a: string, b: string) => replaceMock(a, b),
  }),
  usePathname: jest.fn().mockReturnValue("/test"),
}));

describe("LanguageSwitcher", () => {
  it("displays the current language", () => {
    const { getByText } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <LanguageSwitcher />
      </NextIntlClientProvider>,
    );
    expect(getByText("en")).toBeInTheDocument();
  });

  it("changes the language when a new option is clicked", () => {
    const { getByText } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <LanguageSwitcher />
      </NextIntlClientProvider>,
    );
    const button = getByText("en");
    fireEvent.click(button);
    const option = getByText("ru");
    fireEvent.click(option);

    expect(replaceMock).toHaveBeenCalledWith("/test", { locale: "ru" });
  });
});
