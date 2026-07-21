import { Input as ShadcnInput } from "@/shared/ui/shadcn/input";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = (props: IInputProps) => {
  const { label, value, onChange, className, ...otherProps } = props;

  return <ShadcnInput value={value} onChange={onChange} {...otherProps} />;
};

export default Input;
