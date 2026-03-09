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
  as?: React.ElementType;
}

function Tagline({
  className,
  variant,
  asChild = false,
  as: Tag = "div",
  children,
  ...props
}: TaglineProps) {
  // If asChild is true, clone the child element and merge props onto it
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
      ...props,
      className: cn(
        taglineVariants({ variant, className }),
        (children.props as React.HTMLAttributes<HTMLElement>).className
      ),
    });
  }

  return (
    <Tag className={cn(taglineVariants({ variant, className }))} {...props}>
      {children}
    </Tag>
  );
}

export { Tagline, taglineVariants };