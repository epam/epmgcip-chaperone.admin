import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const options = [
    { id: "1", text: "Option 1", image: "image1.png" },
    { id: "2", text: "Option 2", image: "image2.png" },
    { id: "3", text: "Option 3", image: "image3.png" },
  ];

  it("displays the default option", () => {
    const { getByText } = render(<Dropdown options={options} defaultOptionId="1" />);
    expect(getByText("Option 1")).toBeInTheDocument();
  });

  it("opens and closes the dropdown on button click", () => {
    const { getByText, queryByText } = render(<Dropdown options={options} defaultOptionId="1" />);
    const button = getByText("Option 1");
    fireEvent.click(button);
    expect(getByText("Option 2")).toBeInTheDocument();
    fireEvent.click(button);
    expect(queryByText("Option 2")).toBeNull();
  });

  it("calls onChange with the new option id when an option is clicked", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Dropdown options={options} defaultOptionId="1" onChange={onChange} />,
    );
    const button = getByText("Option 1");
    fireEvent.click(button);
    const option2 = getByText("Option 2");
    fireEvent.click(option2);
    expect(onChange).toHaveBeenCalledWith({
      id: "2",
      image: "image2.png",
      text: "Option 2",
    });
  });
});
