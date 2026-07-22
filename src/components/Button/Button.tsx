import { cn } from "@/shared/ui/shadcn/lib/utils";
import { Button as ShadcnButton } from "@/shared/ui/shadcn/button";
import { forwardRef } from "react";
import Spinner from "../Spinner/Spinner";

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

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const Button = forwardRef(
  (props: IButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      variant,
      disabled,
      size,
      children,
      isLoading,
      ...otherProps
    } = props;

    return (
      <ShadcnButton
        ref={ref}
        variant={variant}
        size={size}
        disabled={isLoading || disabled}
        className={cn(className)}
        {...otherProps}
      >
        {children}
        {isLoading && <Spinner size="sm" />}
      </ShadcnButton>
    );
  },
);

export default Button;
