import { cn } from "@/shared/ui/shadcn/lib/utils";
import { Button as ShadcnButton } from "@/shared/ui/shadcn/button";
import { forwardRef, type ForwardedRef } from "react";

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
}

const Button = forwardRef(
  (props: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, variant, size, children, ...otherProps } = props;

    return (
      <ShadcnButton
        ref={ref}
        variant={variant}
        size={size}
        className={cn(className)}
        {...otherProps}
      >
        {children}
      </ShadcnButton>
    );
  },
);

export default Button;
