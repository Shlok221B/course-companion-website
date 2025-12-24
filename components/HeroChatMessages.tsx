"use client";

import React, { useEffect, useRef, useState } from "react";

export type LeakageRisk = "LOW" | "MED" | "HIGH";

export type GovernanceState = {
  scopeLock: boolean;
  outsideSources: boolean;
  citationRequired: boolean;
  leakageRisk: LeakageRisk;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReduced(mediaQuery.matches);
    update();

    // Safari < 14 fallback
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  return reduced;
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1" aria-label="Assistant is typing">
      <span className="cc-typingDot" />
      <span className="cc-typingDot" style={{ animationDelay: "150ms" }} />
      <span className="cc-typingDot" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

export default function HeroChatMessages({
  governance,
}: {
  governance: GovernanceState;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const timeoutsRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  const QUESTION =
    "Can you explain the concept of equilibrium in Chapter 3?";
  const [showUser, setShowUser] = useState(false);
  const [questionTyped, setQuestionTyped] = useState("");
  const [isQuestionTyping, setIsQuestionTyping] = useState(false);

  const [showTyping, setShowTyping] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [showCitations, setShowCitations] = useState(false);

  useEffect(() => {
    const clearAll = () => {
      for (const t of timeoutsRef.current) window.clearTimeout(t);
      timeoutsRef.current = [];

      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const addTimeout = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timeoutsRef.current.push(id);
    };

    if (prefersReducedMotion === null) return;

    // Accessibility: no looping animation in reduced motion mode.
    if (prefersReducedMotion) {
      clearAll();
      setShowUser(true);
      setQuestionTyped(QUESTION);
      setIsQuestionTyping(false);
      setShowTyping(false);
      setShowAssistant(true);
      setShowCitations(true);
      return;
    }

    const startCycle = () => {
      clearAll();
      setShowUser(false);
      setQuestionTyped("");
      setIsQuestionTyping(false);
      setShowTyping(false);
      setShowAssistant(false);
      setShowCitations(false);

      const startUserAfter = 200;
      const startTypewriterAfter = 200;
      const questionCharMs = 22;
      const afterQuestionPause = 350;

      const typingDuration = 1200;
      const citationsAfterAssistant = 250;
      const holdAfterCitations = 2200;
      const resetGap = 500;

      addTimeout(() => setShowUser(true), startUserAfter);

      addTimeout(() => {
        setIsQuestionTyping(true);
        let idx = 0;

        intervalRef.current = window.setInterval(() => {
          idx += 1;
          setQuestionTyped(QUESTION.slice(0, idx));

          if (idx >= QUESTION.length) {
            if (intervalRef.current !== null) {
              window.clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            setIsQuestionTyping(false);

            addTimeout(() => setShowTyping(true), afterQuestionPause);
            addTimeout(() => {
              setShowTyping(false);
              setShowAssistant(true);
            }, afterQuestionPause + typingDuration);
            addTimeout(
              () => setShowCitations(true),
              afterQuestionPause + typingDuration + citationsAfterAssistant
            );
            addTimeout(
              () => startCycle(),
              afterQuestionPause +
                typingDuration +
                citationsAfterAssistant +
                holdAfterCitations +
                resetGap
            );
          }
        }, questionCharMs);
      }, startTypewriterAfter);
    };

    startCycle();
    return () => clearAll();
  }, [prefersReducedMotion]);

  const assistantTone =
    governance.leakageRisk === "LOW"
      ? "ok"
      : governance.leakageRisk === "MED"
        ? "warn"
        : "danger";

  const assistantBubbleClass =
    assistantTone === "ok"
      ? "bg-accent-teal/10 border-accent-teal/20"
      : assistantTone === "warn"
        ? "bg-accent-amber/10 border-accent-amber/30"
        : "bg-red-500/10 border-red-500/25";

  const assistantCitations = [
    { label: "Lecture 4, slide 12", kind: "course" as const },
    { label: "Ch. 3, pp. 61-64", kind: "course" as const },
    ...(governance.outsideSources
      ? [{ label: "External: OpenStax ref", kind: "external" as const }]
      : []),
  ];

  return (
    <div className="space-y-3 min-h-[190px]" aria-live="polite">
      {/* Policy-driven notice */}
      {!governance.scopeLock && (
        <div className="text-xs text-primary/70 bg-accent-amber/10 border border-accent-amber/25 rounded-md px-3 py-2">
          Scope is unlocked — responses may include material beyond the course.
        </div>
      )}

      {/* User message */}
      {showUser && (
        <div className="bg-neutral-light rounded-lg p-3 max-w-[80%] cc-bubbleIn">
          <div className="text-sm text-primary relative">
            {/* Reserve final wrapped height to avoid layout shift during typewriter */}
            <span className="invisible block" aria-hidden="true">
              {QUESTION}
            </span>
            <span className="absolute inset-0">
              {questionTyped}
              {isQuestionTyping && <span className="cc-caret">|</span>}
            </span>
          </div>
        </div>
      )}

      {/* Assistant typing indicator */}
      {showTyping && (
        <div
          className={`rounded-lg p-3 max-w-[80%] ml-auto border cc-bubbleIn ${assistantBubbleClass}`}
        >
          <TypingDots />
        </div>
      )}

      {/* Assistant response */}
      {showAssistant && (
        <div
          className={`rounded-lg p-3 max-w-[80%] ml-auto border cc-bubbleIn ${assistantBubbleClass}`}
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            {(assistantTone === "warn" || assistantTone === "danger") && (
              <span className="text-[11px] px-2 py-1 rounded border bg-white/60 border-white/50 text-primary/70">
                {assistantTone === "warn" ? "Policy warning" : "High-risk mode"}
              </span>
            )}
            {!governance.citationRequired && (
              <span className="text-[11px] px-2 py-1 rounded border bg-white/60 border-white/50 text-primary/70 ml-auto">
                Citations disabled
              </span>
            )}
          </div>

          <p className="text-sm text-primary mb-2">
            Equilibrium occurs when the forward and reverse reaction rates are
            equal...
          </p>

          {showCitations && governance.citationRequired && (
            <div className="flex flex-wrap gap-2 mt-2 cc-fadeInUp">
              {assistantCitations.map((c) => (
                <span
                  key={c.label}
                  className={
                    c.kind === "external"
                      ? "text-xs bg-white border border-accent-amber/40 text-accent-amber px-2 py-1 rounded"
                      : "text-xs bg-white border border-accent-teal/30 text-accent-teal px-2 py-1 rounded"
                  }
                >
                  {c.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


