import { getWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/** Server component — hides when NEXT_PUBLIC_WHATSAPP_NUMBER is unset. */
export function WhatsAppLink({ className, children }: Props) {
  const href = getWhatsAppUrl();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? "Chat on WhatsApp"}
    </a>
  );
}
