import type { Meta, StoryObj } from "@storybook/react-vite";
import FormInput from "./FormInput";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
  title: "Form/FormInput",
  tags: ["autodocs"],
  args: {
    placeholder: "Write something",
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {
  args: {},
};
