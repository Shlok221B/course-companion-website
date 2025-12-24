"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedMeterProps {
  value: number; // 0-100
  label: string;
  color?: string;
  className?: string;
  variant?: "light" | "dark";
}

export default function AnimatedMeter({
  value,
  label,
  color = "bg-accent-teal",
  className = "",
  variant = "light",
}: AnimatedMeterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500; // 1.5 seconds
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCurrentValue(Math.min(increment * currentStep, value));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const labelClass =
    variant === "dark" ? "text-white/70" : "text-primary/80";
  const valueClass = variant === "dark" ? "text-white" : "text-primary";
  const trackClass = variant === "dark" ? "bg-white/10" : "bg-neutral-light";

  return (
    <div ref={ref} className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-sm">
        <span className={`font-medium ${labelClass}`}>{label}</span>
        <span className={`font-mono font-semibold ${valueClass}`}>
          {Math.round(currentValue)}%
        </span>
      </div>
      <div className={`h-2 ${trackClass} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${color} transition-all duration-300 ease-out rounded-full`}
          style={{ width: `${currentValue}%` }}
        />
      </div>
    </div>
  );
}

