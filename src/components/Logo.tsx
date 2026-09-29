import Link from "next/link";

export function Logo({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center no-underline hover:no-underline ${className}`}
      aria-label="eternalflow.co"
    >
      {/* Light theme wordmark — primary lock: lowercase eternalflow.co */}
      <img
        src="/brand/wordmark-eternalflow-co.svg"
        alt="eternalflow.co"
        width={168}
        height={36}
        className="h-8 w-auto dark:hidden"
        decoding="async"
      />
      {/* Dark theme wordmark */}
      <img
        src="/brand/wordmark-eternalflow-co-dark.svg"
        alt="eternalflow.co"
        width={168}
        height={36}
        className="hidden h-8 w-auto dark:block"
        decoding="async"
      />
    </Link>
  );
}
