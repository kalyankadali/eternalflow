import type { ReactNode } from "react";

export function MockBrowser({
  url,
  children,
  className = "",
}: {
  url: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`ef-mock-browser ${className}`}>
      <div className="ef-mock-chrome">
        <span className="ef-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div className="ef-mock-url">{url}</div>
      </div>
      <div className="ef-mock-screen">{children}</div>
    </div>
  );
}

export function MockPhone({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`ef-mock-phone ${className}`}>
      <div className="ef-notch" />
      {children}
    </div>
  );
}
