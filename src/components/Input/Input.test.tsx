import { render } from "@testing-library/react";
import { page } from "@vitest/browser/context";
import { describe, it, expect, vi } from "vitest";
import Input from "./Input";

describe("Input component", () => {
  it("renders", async () => {
    render(<Input />);
    const input = page.getByRole("textbox");
    await expect.element(input).toBeVisible();
  });

  it("renders with correct placeholder", async () => {
    render(<Input name="firstName" placeholder="John Doe" />);
    const input = page.getByRole("textbox");
    await expect.element(input).toHaveAttribute("placeholder", "John Doe");
  });

  it("lets user type text", async () => {
    render(<Input />);
    const input = page.getByRole("textbox");
    try {
      await input.fill("James");
    } catch {}
    await expect.element(input).toHaveValue("James");
  });

  it("lets onChange change its value", async () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = page.getByRole("textbox");
    try {
      await input.fill("James");
    } catch {}
    expect(handleChange).toHaveBeenCalled();
    await expect.element(input).toHaveValue("James");
  });

  it("to be disabled and doesn't let user type", async () => {
    render(<Input disabled />);
    const input = page.getByRole("textbox");
    await expect.element(input).toBeDisabled();

    try {
      await input.fill("James");
    } catch {}

    await expect.element(input).toHaveValue("");
  });

  it("renders with hardcoded value", async () => {
    render(<Input value="John Jones" readOnly />);
    const input = page.getByRole("textbox");
    await expect.element(input).toHaveValue("John Jones");
  });
});
