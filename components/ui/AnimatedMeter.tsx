"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedMeterProps {
  value: number; // 0-100
  label: string;
  color?: string;
  className?: string;
}

export default function AnimatedMeter({
  value,
  label,
  color = "bg-accent-teal",
  className = "",
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

  return (
    <div ref={ref} className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-primary/80">{label}</span>
        <span className="font-mono font-semibold text-primary">
          {Math.round(currentValue)}%
        </span>
      </div>
      <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300 ease-out rounded-full`}
          style={{ width: `${currentValue}%` }}
        />
      </div>
    </div>
  );
}

