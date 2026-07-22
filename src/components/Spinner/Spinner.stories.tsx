import type { Meta, StoryObj } from "@storybook/react-vite";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: "Shared/Spinner",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
