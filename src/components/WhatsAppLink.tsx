import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";

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
      {children ?? siteConfig.cta.whatsapp}
    </a>
  );
}
