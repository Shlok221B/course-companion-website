import React from "react";

interface CardProps {
  children: React.ReactNode;
  size?: "default" | "large";
  className?: string;
}

export default function Card({
  children,
  size = "default",
  className = "",
}: CardProps) {
  const baseClass = size === "large" ? "card-lg" : "card";
  return <div className={`${baseClass} ${className}`}>{children}</div>;
}

