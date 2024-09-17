import assertIsNode from "./assertIsNode";

describe("assertIsNode", () => {
  it("does not throw error when argument is a Node", () => {
    const node = document.createElement("div");

    expect(() => assertIsNode(node)).not.toThrow();
  });

  it("throws error when argument is null", () => {
    expect(() => assertIsNode(null)).toThrow("Node expected");
  });
});
