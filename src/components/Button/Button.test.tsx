import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  it("renders the button with correct children", () => {
    render(<Button>Hello World!</Button>);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  it("fires the onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Hello World!</Button>);
    await userEvent.click(screen.getByText("Hello World!"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("shows Loader component when isLoading prop is true", async () => {
    render(<Button isLoading>Hello World!</Button>);
    const loader = screen.getByTestId("spinner");
    expect(loader).toBeInTheDocument();
  });

  it("doesn't show Loader component when prop is not passed", async () => {
    render(<Button>Hello World!</Button>);
    const loader = screen.queryByTestId("loader");
    expect(loader).not.toBeInTheDocument();
  });

  it("doesn't allow click when disabled and expect to be disabled", async () => {
    const handleClick = vi.fn();
    render(<Button disabled>Hello World!</Button>);

    await userEvent.click(screen.getByText("Hello World!"));
    expect(screen.getByText("Hello World!")).toBeDisabled();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("doesn't allow click when loading", async () => {
    const handleClick = vi.fn();
    render(<Button isLoading>Hello World!</Button>);

    await userEvent.click(screen.getByText("Hello World!"));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
