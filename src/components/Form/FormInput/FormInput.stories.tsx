import type { Meta, StoryObj } from "@storybook/react-vite";
import FormInput from "./FormInput";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
  title: "Form/FormInput",
  tags: ["autodocs"],
  args: {
    disabled: false,
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    name: "firstName",
    placeholder: "John Johns",
  },
};
