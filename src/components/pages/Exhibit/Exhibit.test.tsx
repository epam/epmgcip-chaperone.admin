import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Exhibit from "./Exhibit";
import { slug, exhibitItem, exhibitMockAnotherLanguage } from "../../../mocks/exhibit";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../../messages/en.json";

jest.mock("yet-another-react-lightbox", () => jest.fn());
jest.mock("yet-another-react-lightbox/plugins/zoom", () => ({}));

describe("Exhibit", () => {
  it("renders", async () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Exhibit slug={slug} exhibit={exhibitItem} />
      </NextIntlClientProvider>,
    );

    await waitFor(() => expect(screen.getByTestId("exhibit")).toBeInTheDocument());
  });

  it("renders exhibit details", async () => {
    const { getByText, container } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Exhibit slug={slug} exhibit={exhibitItem} />
      </NextIntlClientProvider>,
    );

    await waitFor(() => {
      expect(getByText("Test Exhibit")).toBeInTheDocument();
      expect(getByText("Test Author")).toBeInTheDocument();
      expect(container.querySelector("audio")).toHaveAttribute(
        "src",
        "https://example.com/audio.mp3",
      );
      expect(getByText("1990")).toBeInTheDocument();
    });
  });

  it("renders error message when exhibit for selected language not found", async () => {
    const { getByText } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Exhibit slug={slug} exhibit={exhibitMockAnotherLanguage} />
      </NextIntlClientProvider>,
    );

    await waitFor(() => {
      expect(getByText("Russian")).toBeInTheDocument();
      expect(getByText("Uzbek")).toBeInTheDocument();
      expect(getByText("Karakalpak")).toBeInTheDocument();
    });
  });
});
