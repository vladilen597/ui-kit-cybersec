import { render } from "@testing-library/react";
import { page } from "@vitest/browser/context";
import { describe, it, expect } from "vitest";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("renders as default", async () => {
    render(<Spinner />);
    const spinner = page.getByTestId("spinner");
    await expect.element(spinner).toBeVisible();
  });

  it("renders with different class as size prop changes", async () => {
    render(<Spinner size="lg" />);
    const spinner = page.getByTestId("spinner");
    await expect.element(spinner).toHaveClass("h-12");
    await expect.element(spinner).toHaveClass("w-12");
  });

  it("renders with size xs when size is not provided", async () => {
    render(<Spinner />);
    const spinner = page.getByTestId("spinner");
    await expect.element(spinner).toHaveClass("h-2");
    await expect.element(spinner).toHaveClass("w-2");
  });
});
