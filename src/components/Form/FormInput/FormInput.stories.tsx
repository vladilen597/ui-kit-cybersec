import type { Meta, StoryObj } from "@storybook/react-vite";
import FormInput from "./FormInput";
import { withRHF } from "@/utils/withRHF";
import { FormProvider } from "react-hook-form";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
  title: "Form/FormInput",
  tags: ["autodocs"],
  args: {
    disabled: false,
    className: "",
  },
  decorators: [(Story) => withRHF(Story, true)],
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    name: "firstName",
    placeholder: "John Johns",
  },
};
