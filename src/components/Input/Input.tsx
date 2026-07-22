import { Input as ShadcnInput } from "@/shared/ui/shadcn/input";
import { forwardRef } from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = forwardRef(
  (props: IInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { label, value, onChange, className, ...otherProps } = props;

    return (
      <ShadcnInput
        ref={ref}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    );
  },
);

export default Input;
