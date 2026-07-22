import { render, screen } from "@testing-library/react";
import Input from "./Input";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Input component", () => {
  it("renders", () => {
    render(<Input />);
  });

  it("renders with correct placeholder", () => {
    render(<Input name="firstName" placeholder="John Doe" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "John Doe",
    );
  });

  it("lets user type text", async () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "James");
    expect(input).toHaveValue("James");
  });

  it("lets onChange change its value", async () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "James");
    expect(handleChange).toHaveBeenCalledTimes(5);
    expect(input).toHaveValue("James");
  });

  it("to be disabled and doesn't let user type", async () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "James");
    expect(input).toBeDisabled();
    expect(input).toHaveValue("");
  });

  it("renders with hardcoded value", async () => {
    render(<Input value="John Jones" />);
    expect(screen.getByRole("textbox")).toHaveValue("John Jones");
  });
});
