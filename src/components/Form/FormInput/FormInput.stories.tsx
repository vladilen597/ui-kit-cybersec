import type { Meta, StoryObj } from "@storybook/react-vite";
import { withRHF } from "@/utils/withRHF";
import FormInput from "./FormInput";
import { within } from "storybook/test";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
  title: "Form/FormInput",
  tags: ["autodocs"],
  args: {
    disabled: false,
    className: "",
    placeholder: "Write ",
  },
  parameters: {
    showSubmitButton: false,
  },
  decorators: [
    (Story, context) => withRHF(Story, context.parameters.showSubmitButton),
  ],
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    name: "firstName",
    placeholder: "John Johns",
  },
};

export const Password: Story = {
  args: {
    name: "password",
    type: "password",
    placeholder: "••••••••",
  },
};

export const Disabled: Story = {
  args: {
    name: "firstName",
    disabled: true,
  },
};

export const WithSubmitButton: Story = {
  args: {
    name: "firstName",
  },
  parameters: {
    showSubmitButton: true,
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
  },
};
