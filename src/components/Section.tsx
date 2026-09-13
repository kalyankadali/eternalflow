import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
  wash?: boolean;
  containerClassName?: string;
};

export function Section({
  children,
  className = "",
  id,
  alt,
  wash,
  containerClassName = "",
}: Props) {
  const tone = wash ? "ef-alt-wash" : alt ? "ef-alt" : "";
  return (
    <section id={id} className={`relative py-16 sm:py-[88px] ${tone} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
