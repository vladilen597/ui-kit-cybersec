import { render } from "@testing-library/react";
import { page, userEvent } from "@vitest/browser/context";
import { describe, it, vi, expect } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button with correct children", async () => {
    render(<Button>Hello World!</Button>);
    const button = page.getByRole("button");
    await expect.element(button).toBeVisible();
  });

  it("fires the onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Hello World!</Button>);
    const button = page.getByRole("button").filter({ hasText: "Hello World!" });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("shows Loader component when isLoading prop is true", async () => {
    render(<Button isLoading>Hello World!</Button>);
    const loader = page.getByTestId("spinner");
    await expect.element(loader).toBeVisible();
  });

  it("doesn't show Loader component when prop is not passed", async () => {
    render(<Button>Hello World!</Button>);
    const loader = page.getByTestId("spinner");
    await expect.element(loader).not.toBeInTheDocument();
  });

  it("doesn't allow click when disabled and expect to be disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Hello World!
      </Button>,
    );
    const button = page.getByRole("button").filter({ hasText: "Hello World!" });
    await expect.element(button).toBeDisabled();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("doesn't allow click when loading", async () => {
    const handleClick = vi.fn();
    render(
      <Button isLoading onClick={handleClick}>
        Hello World!
      </Button>,
    );
    const button = page.getByRole("button").filter({ hasText: "Hello World!" });
    try {
      await userEvent.click(button);
    } catch {}
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
