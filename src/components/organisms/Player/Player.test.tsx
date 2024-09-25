import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../../messages/en.json";
import Player from "./Player";

describe("Player", () => {
  const url = "https://example.com/audio.mp3";

  it("renders audio player with correct source", () => {
    const { container } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Player url={url} />
      </NextIntlClientProvider>,
    );

    expect(container.querySelector("audio")).toHaveAttribute("src", url);
  });

  it("renders custom buttons", async () => {
    const { getByAltText } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Player url={url} />
      </NextIntlClientProvider>,
    );

    expect(getByAltText("Play audioguide")).toBeInTheDocument();
    expect(getByAltText("Forward")).toBeInTheDocument();
    expect(getByAltText("Rewind")).toBeInTheDocument();
  });
});
