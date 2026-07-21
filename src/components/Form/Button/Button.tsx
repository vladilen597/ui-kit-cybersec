import { cn } from "@/shared/ui/shadcn/lib/utils";
import { Button as ShadcnButton } from "@/shared/ui/shadcn/button";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "ghost"
  | "link"
  | "outline"
  | "secondary";

export type ButtonSize =
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg"
  | "default";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

const Button = ({
  label = "Click",
  className,
  variant,
  size,
  children,
  ...otherProps
}: IButtonProps) => {
  return (
    <ShadcnButton
      variant={variant}
      size={size}
      className={cn(className)}
      {...otherProps}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
