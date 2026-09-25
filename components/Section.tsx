import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 ${muted ? "bg-surface-muted" : ""} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
