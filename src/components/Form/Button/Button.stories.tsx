import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta = {
  component: Button,
  title: "Form/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      cointrol: { type: "select" },
      options: [
        "default",
        "secondary",
        "ghost",
        "destructive",
        "link",
        "outline",
      ],
      description: "Button shadcn variant",
    },
    size: {
      cointrol: { type: "select" },
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "Button shadcn size",
    },
  },
  args: {
    children: "Hello World!",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "default" },
};
