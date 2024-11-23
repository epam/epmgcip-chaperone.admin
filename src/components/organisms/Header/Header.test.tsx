import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../../messages/en.json";

jest.mock("@/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  usePathname: jest.fn().mockReturnValue("/test"),
  Link: jest.fn().mockReturnValue(<img src={"/test"} alt={"test"} />),
}));

describe("Header", () => {
  it("renders", () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Header />
      </NextIntlClientProvider>,
    );

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
  });
});
