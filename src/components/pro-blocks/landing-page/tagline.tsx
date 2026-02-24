import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
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

// state passed to render function and converted to data-* attributes
type TaglineState = {
  slot: string;
  variant: VariantProps<typeof taglineVariants>["variant"] | null;
};

interface TaglineProps
  extends useRender.ComponentProps<"div", TaglineState>,
    VariantProps<typeof taglineVariants> {}

function Tagline({
  className,
  variant = "ghost",
  ...props
}: TaglineProps) {
  return useRender<TaglineState, HTMLDivElement>({
    defaultTagName: "div",
    props: mergeProps(
      {
        className: cn(taglineVariants({ variant }), className),
      },
      props
    ),
    state: {
      slot: "tagline",
      variant,
    },
  });
}

export { Tagline, taglineVariants };

