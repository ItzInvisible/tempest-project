interface TaglineProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Tagline({ children, className }: TaglineProps) {
    return (
      <span className={`text-sm font-semibold uppercase tracking-widest text-muted-foreground ${className ?? ""}`}>
        {children}
      </span>
    );
  }