import React from "react";

interface TrustTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function TrustTag({ children, className = "" }: TrustTagProps) {
  return <span className={`trust-tag ${className}`}>{children}</span>;
}

