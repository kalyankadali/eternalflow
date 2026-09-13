import Link from "next/link";

export function Logo({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 text-[1.12rem] font-extrabold tracking-tight text-ef-ink no-underline hover:text-ef-ink hover:no-underline ${className}`}
    >
      <span className="ef-logo-mark">EF</span>
      Eternal<span className="text-ef-accent">Flow</span>
    </Link>
  );
}
