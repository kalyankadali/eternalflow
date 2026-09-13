import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-ef-accent text-white hover:bg-ef-accent-strong shadow-sm",
  secondary:
    "border border-ef-accent text-ef-accent bg-transparent hover:bg-ef-accent-muted",
  ghost:
    "text-ef-muted hover:text-ef-ink hover:bg-ef-surface-2",
} as const;

const sizes = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

function classes(variant: Variant, size: Size, className: string) {
  return `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ef-ring disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: Common & { href: string; external?: boolean }) {
  const cls = classes(variant, size, className);
  if (external || href.startsWith("http") || href.startsWith("https://wa.me")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
