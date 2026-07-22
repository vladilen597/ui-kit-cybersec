import { Controller, useFormContext } from "react-hook-form";
import Input, { type IInputProps } from "@/components/Input/Input";

interface IFormInputProps extends IInputProps {
  name: string;
}

const FormInput = (props: IFormInputProps) => {
  const { name, ...otherProps } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...otherProps} {...field} />}
    />
  );
};

export default FormInput;
