import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Shared/Input",
  tags: ["autodocs"],
  args: {
    disabled: false,
    placeholder: "Write something",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};
