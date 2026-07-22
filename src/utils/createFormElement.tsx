import { Controller, useFormContext } from "react-hook-form";

// TO DO Function that wraps the component and returns as React Hook Forms component

export function createFormElement<T>(
  name: string,
  Component: React.ElementType,
) {
  return function FormElement({}) {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Component
              aria-invalid={errors[name] ? "true" : "false"}
              {...field}
            />
            {errors[name] && (
              <span className="mt-1 block text-xs text-destructive">
                {errors[name].message as string}
              </span>
            )}
          </>
        )}
      />
    );
  };
}
