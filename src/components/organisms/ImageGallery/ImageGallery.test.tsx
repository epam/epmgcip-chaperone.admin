import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageGallery from "./ImageGallery";

jest.mock("yet-another-react-lightbox", () => jest.fn());
jest.mock("yet-another-react-lightbox/plugins/zoom", () => ({}));

jest.mock("@/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  Link: jest.fn().mockReturnValue(<img src={"/test"} alt={"test"} />),
}));

describe("ImageGallery", () => {
  const images = [
    { url: "https://example.com/image1.jpg", id: "1" },
    { url: "https://example.com/image2.jpg", id: "2" },
    { url: "https://example.com/image3.jpg", id: "3" },
  ];

  it("renders gallery", () => {
    render(<ImageGallery images={images} isLinkImage={false} displayArrows={false} />);
  });
});
