import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
  containerClassName?: string;
};

export function Section({ children, className = "", id, alt, containerClassName = "" }: Props) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 ${alt ? "bg-ef-surface-2/80" : ""} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
