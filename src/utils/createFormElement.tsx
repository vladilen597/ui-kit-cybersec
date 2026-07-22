import { Controller, useFormContext } from "react-hook-form";

// Function that wraps the component and returns as React Hook Forms component with error

export function createFormElement<T>(Component: React.ElementType) {
  return function FormElement(props: Omit<T, "name"> & { name: string }) {
    const { name, ...otherProps } = props;
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
              {...otherProps}
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
