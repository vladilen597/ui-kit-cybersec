import { render } from "@testing-library/react";
import { page } from "@vitest/browser/context";
import { describe, it, expect } from "vitest";
import FormInput from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";

const FormContainer = ({
  children,
  defaultValues = {},
}: {
  children: React.ReactNode;
  defaultValues?: any;
}) => {
  const methods = useForm({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("FormInput component", () => {
  it("renders with correct form name", async () => {
    render(
      <FormContainer>
        <FormInput name="firstName" />
      </FormContainer>,
    );

    const input = page.getByRole("textbox");
    await expect.element(input).toBeVisible();
    await expect.element(input).toHaveAttribute("name", "firstName");
  });

  it("renders with correct placeholder", async () => {
    render(
      <FormContainer>
        <FormInput name="firstName" placeholder="John Doe" />
      </FormContainer>,
    );

    const input = page.getByRole("textbox");
    await expect.element(input).toHaveAttribute("placeholder", "John Doe");
  });

  it("lets user type text", async () => {
    render(
      <FormContainer>
        <FormInput name="firstName" />
      </FormContainer>,
    );

    const input = page.getByRole("textbox");

    try {
      await input.fill("James");
    } catch {}

    await expect.element(input).toHaveValue("James");
  });

  it("to be disabled and doesn't let user type", async () => {
    render(
      <FormContainer>
        <FormInput name="firstName" disabled />
      </FormContainer>,
    );

    const input = page.getByRole("textbox");

    await expect.element(input).toBeDisabled();

    try {
      await input.fill("James");
    } catch {}
    await expect.element(input).toHaveValue("");
  });

  it("renders with default value", async () => {
    render(
      <FormContainer defaultValues={{ firstName: "John Jones" }}>
        <FormInput name="firstName" />
      </FormContainer>,
    );

    const input = page.getByRole("textbox");
    await expect.element(input).toHaveValue("John Jones");
  });
});
