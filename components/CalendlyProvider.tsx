"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import CalendlyModal from "./CalendlyModal";

interface CalendlyContextType {
  openCalendly: () => void;
  closeCalendly: () => void;
  isOpen: boolean;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(
  undefined
);

const CALENDLY_URL = "https://calendly.com/zoheb-coursecompanion/30min";

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly, isOpen }}>
      {children}
      <CalendlyModal isOpen={isOpen} onClose={closeCalendly} url={CALENDLY_URL} />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
}

