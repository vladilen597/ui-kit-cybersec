import { cn } from "@/shared/ui/shadcn/lib/utils";

export type SpinnerSize = "xs" | "sm" | "md" | "lg";

const spinnerSizes: Readonly<Record<SpinnerSize, string>> = {
  xs: "h-2 w-2",
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

interface ILoaderProps {
  size?: SpinnerSize;
}

const Spinner = (props: ILoaderProps) => {
  const { size } = props;

  return (
    <div
      data-testid="spinner"
      className={cn(
        "rounded-full shrink-0 border-2 border-foreground border-t-accent animate-spin",
        spinnerSizes[size as keyof typeof spinnerSizes] || spinnerSizes.xs,
      )}
    />
  );
};

export default Spinner;
