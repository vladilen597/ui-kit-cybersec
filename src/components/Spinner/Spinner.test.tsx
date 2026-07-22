import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("renders as default", () => {
    render(<Spinner />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders with different class as size prop changes", () => {
    render(<Spinner size="lg" />);
    expect(screen.getByTestId("spinner")).toHaveClass("h-12", "w-12");
  });

  it("renders with size xs when size is not provided", () => {
    render(<Spinner />);
    expect(screen.getByTestId("spinner")).toHaveClass("h-2", "w-2");
  });
});
