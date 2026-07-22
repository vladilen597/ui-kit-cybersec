import { useFormContext } from "react-hook-form";

// TO DO Function that wraps the component and returns as React Hook Forms component

const createFormElement = (name: string, Component: React.ReactElement) => {
  return function FormElement({}) {
    const { control } = useFormContext();

    return <Controller control={control}></Controller>;
  };
};
