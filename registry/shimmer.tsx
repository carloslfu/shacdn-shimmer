import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

import "./shimmer.css";

export function Shimmer({
  className,
  children,
  shimmerDuration = 0.65,
  asChild = false,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  shimmerDuration?: number;
  asChild?: boolean;
} & React.ComponentProps<"div">) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "shimmer-effect [--shimmer-base:theme(colors.gray.900)] [--shimmer-highlight:theme(colors.gray.300)]",
        className
      )}
      style={{ animationDuration: `${shimmerDuration}s` }}
      {...props}
    >
      {children}
    </Comp>
  );
}
