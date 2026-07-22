import type { Meta, StoryObj } from "@storybook/react-vite";
import FormInput from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
  title: "Form/FormInput",
  tags: ["autodocs"],
  args: {
    disabled: false,
    placeholder: "Enter your text",
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {
  args: {
    name: "firstName",
  },
};
