import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const taglineVariants = cva(
  "flex items-center justify-center text-sm font-medium w-fit gap-1 [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-background border shadow-xs px-2.5 rounded-md h-7",
        ghost: "bg-transparent text-muted-foreground",
        white: "text-white",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  },
);

interface TaglineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof taglineVariants> {
  asChild?: boolean;
}

const Tagline = React.forwardRef<HTMLDivElement, TaglineProps>(
  (
    {
      className,
      variant,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(taglineVariants({ variant, className }));

    if (asChild && React.isValidElement(children)) {
      // merge props into the single child element
      return React.cloneElement(
        children,
        {
          className: cn(classes, (children.props as any).className),
          ...props,
        } as any,
        (children.props as any).children,
      ) as React.ReactElement;
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  },
);

Tagline.displayName = "Tagline";

export { Tagline, taglineVariants };

