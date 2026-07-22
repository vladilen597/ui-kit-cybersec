import { render, screen } from "@testing-library/react";
import FormInput from "./FormInput";
import userEvent from "@testing-library/user-event";
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
  it("renders with correct form name", () => {
    render(
      <FormContainer>
        <FormInput name="firstName" />
      </FormContainer>,
    );
  });

  it("renders with correct placeholder", () => {
    render(
      <FormContainer>
        <FormInput name="firstName" placeholder="John Doe" />
      </FormContainer>,
    );
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "John Doe",
    );
  });

  it("lets user type text", async () => {
    render(
      <FormContainer>
        <FormInput name="firstName" />
      </FormContainer>,
    );
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "James");
    expect(input).toHaveValue("James");
  });

  it("to be disabled and doesn't let user type", async () => {
    render(
      <FormContainer>
        <FormInput name="firstName" disabled />
      </FormContainer>,
    );
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "James");
    expect(input).toBeDisabled();
    expect(input).toHaveValue("");
  });

  it("renders with default value", async () => {
    render(
      <FormContainer defaultValues={{ firstName: "John Jones" }}>
        <FormInput name="firstName" />
      </FormContainer>,
    );
    expect(screen.getByRole("textbox")).toHaveValue("John Jones");
  });
});
