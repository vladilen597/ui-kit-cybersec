import type { IFormFields } from "@/App";
import Input, { type IInputProps } from "@/components/Input/Input";
import { Controller, type Control } from "react-hook-form";

interface IFormInputProps extends IInputProps {
  name: string;
  control: Control<IFormFields>;
}

const FormInput = (props: IFormInputProps) => {
  const { name, control, ...otherProps } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...otherProps} {...field} />}
    />
  );
};

export default FormInput;
