"use client";

import React, { useEffect, useRef } from "react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function CalendlyModal({
  isOpen,
  onClose,
  url,
}: CalendlyModalProps) {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (document.querySelector('script[src*="calendly.com"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    // Initialize Calendly widget when modal opens
    if (!isOpen || !calendlyRef.current) return;

    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        // Clear any existing content
        if (calendlyRef.current) {
          calendlyRef.current.innerHTML = "";
        }
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: calendlyRef.current,
        });
      } else {
        // Retry after a short delay if Calendly isn't loaded yet
        setTimeout(initCalendly, 100);
      }
    };

    initCalendly();
  }, [isOpen, url]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[95vh] sm:h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 flex-shrink-0">
          <h2 className="text-2xl font-bold text-primary">Book a Demo</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Calendly Embed Container */}
        <div className="flex-1 overflow-hidden relative bg-white">
          <div
            ref={calendlyRef}
            className="calendly-inline-widget h-full w-full"
            style={{ 
              height: "100%",
              width: "100%"
            }}
          />
        </div>
      </div>
    </div>
  );
}

