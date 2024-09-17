import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageGallery from "./ImageGallery";

type ZoomRef = {};

jest.mock("yet-another-react-lightbox", () => jest.fn());
jest.mock("yet-another-react-lightbox/plugins/zoom", () => ({}));

describe("ImageGallery", () => {
  const images = [
    { url: "https://example.com/image1.jpg", id: "1" },
    { url: "https://example.com/image2.jpg", id: "2" },
    { url: "https://example.com/image3.jpg", id: "3" },
  ];

  it("renders images", () => {
    const { getByTestId } = render(<ImageGallery images={images} />);

    images.forEach((image, index) => {
      expect(getByTestId(`image-gallery-image-${index}`)).toHaveAttribute("src", image.url);
    });
  });
});
