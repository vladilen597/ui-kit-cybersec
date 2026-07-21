import { Input as ShadcnInput } from "@/shared/ui/shadcn/input";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ value, onChange, className, ...otherProps }: IInputProps) => {
  return <ShadcnInput value={value} onChange={onChange} {...otherProps} />;
};

export default Input;
