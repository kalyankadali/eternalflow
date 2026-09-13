import { localBusinessJsonLd } from "@/lib/seo";

/** Drop into root layout <head> or body — R5 wires this. */
export function LocalBusinessJsonLd() {
  const data = localBusinessJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
