import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Form/Input",
  tags: ["autodocs"],
  args: {
    placeholder: "Write something",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: { placeholder: "Write something" },
};
