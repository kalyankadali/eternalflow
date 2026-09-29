import Link from "next/link";

/** Header / footer: crest mark + typed eternalflow.co (locked primary) */
export function Logo({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center gap-2.5 no-underline hover:no-underline sm:gap-3 ${className}`}
      aria-label="eternalflow.co"
    >
      <img
        src="/brand/mark-crest.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 sm:h-10 sm:w-10"
        decoding="async"
      />
      <span className="text-[1.25rem] font-semibold leading-none tracking-[-0.02em] sm:text-[1.5rem]">
        <span className="text-ef-ink">eternalflow</span>
        <span className="text-ef-accent">.co</span>
      </span>
    </Link>
  );
}
