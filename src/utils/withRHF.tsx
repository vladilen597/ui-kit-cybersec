import Button from "@/components/Button/Button";
import type { ReactRenderer } from "@storybook/react-vite";
import { FormProvider, useForm } from "react-hook-form";
import type { PartialStoryFn } from "storybook/internal/csf";
import { fn } from "storybook/test";

export const withRHF = (
  Story: PartialStoryFn<ReactRenderer>,
  showSubmitButton: boolean,
) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    fn().mockName("onSubmit")(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex gap-1 w-full"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Story />
        {showSubmitButton && <Button type="submit">Submit</Button>}
      </form>
    </FormProvider>
  );
};
