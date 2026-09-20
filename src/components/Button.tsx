import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-ef-accent text-ef-on-accent shadow-[var(--ef-shadow-sm)] hover:bg-ef-accent-strong hover:shadow-[var(--ef-shadow-md)] hover:-translate-y-px active:translate-y-px",
  secondary:
    "border-[1.5px] border-ef-accent text-ef-accent bg-[color-mix(in_srgb,var(--ef-surface)_70%,transparent)] backdrop-blur-sm hover:bg-ef-accent-muted hover:text-ef-accent-strong hover:-translate-y-px active:translate-y-px",
  ghost:
    "text-ef-muted hover:text-ef-ink hover:bg-ef-surface-2",
} as const;

const sizes = {
  sm: "px-3.5 py-2 text-[13px]",
  md: "px-[18px] py-[11px] text-sm",
  lg: "px-[26px] py-3.5 text-base",
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
  // Omit default inline-flex when caller sets display (e.g. hidden lg:inline-flex),
  // otherwise base inline-flex wins over Tailwind `hidden` in the stylesheet.
  const hasDisplay = /(?:^|\s)(?:sm:|md:|lg:|xl:|2xl:|max-sm:|max-md:|max-lg:|max-xl:)?(?:hidden|inline-flex|inline-block|block|flex|contents|grid)(?:\s|$)/.test(
    className,
  );
  const display = hasDisplay ? "" : "inline-flex";
  return `ef-btn ${display} items-center justify-center gap-2 rounded-full font-semibold leading-tight tracking-[0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ef-ring disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`.replace(/\s+/g, " ").trim();
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
