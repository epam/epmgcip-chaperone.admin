import { render } from "@testing-library/react";
import PlayerButton from "./PlayerButton.tsx";
import "@testing-library/jest-dom";

describe("PlayerButton", () => {
  it("renders without crashing", async () => {
    const { getByText } = render(<PlayerButton iconUrl="" iconAlt="" text="Play" />);

    expect(getByText("Play")).toBeInTheDocument();
  });
});
