import React from "react";

interface BadgePillProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function BadgePill({
  children,
  icon,
  className = "",
}: BadgePillProps) {
  return (
    <span className={`badge-pill ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </span>
  );
}

