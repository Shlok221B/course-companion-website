import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  const combinedClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}

