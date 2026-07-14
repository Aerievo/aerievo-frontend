import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark",
      secondary: "bg-[color:var(--secondary)] text-white hover:bg-primary-dark",
      outline: "border border-primary text-primary hover:bg-surface",
      ghost: "text-primary hover:bg-surface",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-6 py-3.5 text-sm",
      lg: "px-7 py-4 text-base",
    };

    const styles = cn(
      "inline-flex items-center justify-center rounded font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer font-[family-name:var(--font-heading)]",
      variants[variant],
      sizes[size],
      className,
    );

    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
