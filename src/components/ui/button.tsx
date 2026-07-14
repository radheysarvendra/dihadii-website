import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-brand-blue text-white shadow-lg shadow-brand-blue/25 hover:bg-brand-blue-dark hover:shadow-brand-blue/35",
        accent:
          "bg-brand-orange text-white shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-dark hover:shadow-brand-orange/35",
        secondary:
          "bg-brand-sky/15 text-brand-blue border border-brand-sky/30 hover:bg-brand-sky/25",
        outline:
          "border-2 border-brand-blue/20 bg-white text-brand-navy hover:border-brand-blue/40 hover:bg-brand-blue/5",
        ghost: "text-brand-navy hover:bg-brand-blue/5",
        link: "text-brand-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 px-8 text-base rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
