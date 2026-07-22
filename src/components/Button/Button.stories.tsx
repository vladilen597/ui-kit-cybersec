import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import { fn, within } from "storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Shared/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
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
      control: { type: "select" },
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
    variant: "default",
    children: "Hello World!",
    onClick: fn(),
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  render: (args) => {
    return (
      <div className="space-x-1">
        <Button {...args} variant="default">
          {args.children}
        </Button>
        <Button {...args} variant="secondary">
          {args.children}
        </Button>
        <Button {...args} variant="ghost">
          {args.children}
        </Button>
        <Button {...args} variant="destructive">
          {args.children}
        </Button>
        <Button {...args} variant="link">
          {args.children}
        </Button>
        <Button {...args} variant="outline">
          {args.children}
        </Button>
      </div>
    );
  },
  parameters: {
    controls: {
      exclude: ["variant"],
    },
  },
};

export const Loading: Story = {
  args: { isLoading: true },
};
