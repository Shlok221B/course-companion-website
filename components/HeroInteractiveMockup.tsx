"use client";

import React, { useMemo, useState } from "react";
import AnimatedMeter from "./ui/AnimatedMeter";
import HeroChatMessages, { type GovernanceState, type LeakageRisk } from "./HeroChatMessages";

function nextRisk(risk: LeakageRisk): LeakageRisk {
  if (risk === "LOW") return "MED";
  if (risk === "MED") return "HIGH";
  return "LOW";
}

function riskToPercent(risk: LeakageRisk) {
  if (risk === "LOW") return 20;
  if (risk === "MED") return 55;
  return 85;
}

function riskToColor(risk: LeakageRisk) {
  if (risk === "LOW") return "bg-accent-teal";
  if (risk === "MED") return "bg-accent-amber";
  return "bg-red-500";
}

function riskToDotColor(risk: LeakageRisk) {
  if (risk === "LOW") return "bg-accent-teal";
  if (risk === "MED") return "bg-accent-amber";
  return "bg-red-500";
}

function Pill({
  tone,
  children,
}: {
  tone: "good" | "neutral" | "warn" | "danger";
  children: React.ReactNode;
}) {
  const cls =
    tone === "good"
      ? "bg-accent-teal/15 text-accent-teal border-accent-teal/30"
      : tone === "warn"
        ? "bg-accent-amber/15 text-accent-amber border-accent-amber/30"
        : tone === "danger"
          ? "bg-red-500/15 text-red-200 border-red-500/30"
          : "bg-white/5 text-white/70 border-white/10";

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded border text-[11px] font-mono uppercase tracking-wider ${cls}`}
    >
      {children}
    </span>
  );
}

function RowButton({
  label,
  value,
  onClick,
  hint,
}: {
  label: string;
  value: React.ReactNode;
  onClick: () => void;
  hint?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between gap-4 rounded-lg px-3 py-1.5 text-left border border-white/10 bg-white/0 hover:bg-white/5 active:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-teal/60"
      title={hint}
    >
      <span className="text-white/80">{label}</span>
      <span className="flex items-center gap-2">
        {value}
        <span className="text-white/30" aria-hidden="true">
          ⟳
        </span>
      </span>
    </button>
  );
}

export default function HeroInteractiveMockup() {
  const [gov, setGov] = useState<GovernanceState>({
    scopeLock: true,
    outsideSources: false,
    citationRequired: true,
    leakageRisk: "LOW",
  });

  const [audit, setAudit] = useState<string>("Policy loaded (simulated)");

  const riskTone = useMemo(() => {
    if (gov.leakageRisk === "LOW") return "good" as const;
    if (gov.leakageRisk === "MED") return "warn" as const;
    return "danger" as const;
  }, [gov.leakageRisk]);

  return (
    <div className="bg-white border-2 border-neutral-border rounded-card-lg shadow-2xl overflow-hidden">
      {/* Chat Panel */}
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-border pb-3">
          <div className="flex flex-col">
            <h3 className="font-semibold text-primary">Course Companion Chat</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {!gov.scopeLock && (
                <span className="text-[11px] px-2 py-1 rounded border bg-accent-amber/10 border-accent-amber/30 text-primary/80">
                  Scope unlocked
                </span>
              )}
              {gov.outsideSources && (
                <span className="text-[11px] px-2 py-1 rounded border bg-accent-amber/10 border-accent-amber/30 text-primary/80">
                  Outside sources enabled
                </span>
              )}
              {!gov.citationRequired && (
                <span className="text-[11px] px-2 py-1 rounded border bg-neutral-light border-neutral-border text-primary/70">
                  Citations optional
                </span>
              )}
              {(gov.leakageRisk === "MED" || gov.leakageRisk === "HIGH") && (
                <span className="text-[11px] px-2 py-1 rounded border bg-red-500/10 border-red-500/25 text-primary/80">
                  Elevated leakage risk
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${riskToDotColor(gov.leakageRisk)}`}
            />
            <span className="text-xs font-mono text-primary/60">ACTIVE</span>
          </div>
        </div>

        <HeroChatMessages governance={gov} />
      </div>

      {/* Status Panel */}
      <div className="bg-panel-dark text-white p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-accent-teal">
              Governance Status
            </h4>
            <p className="text-[11px] text-white/60 mt-1">Click to simulate</p>
          </div>
          <Pill tone={riskTone}>{gov.leakageRisk} risk</Pill>
        </div>

        <div className="space-y-2 text-sm font-mono">
          <RowButton
            label="Scope Lock"
            hint="Toggle whether answers are constrained to course materials"
            value={
              gov.scopeLock ? (
                <Pill tone="good">ON</Pill>
              ) : (
                <Pill tone="warn">OFF</Pill>
              )
            }
            onClick={() => {
              setGov((s) => {
                const next = { ...s, scopeLock: !s.scopeLock };
                setAudit(`Scope Lock → ${next.scopeLock ? "ON" : "OFF"} (simulated)`);
                return next;
              });
            }}
          />

          <RowButton
            label="Outside Sources"
            hint="Toggle whether the assistant may use external sources"
            value={
              gov.outsideSources ? (
                <Pill tone="warn">ON</Pill>
              ) : (
                <Pill tone="neutral">OFF</Pill>
              )
            }
            onClick={() => {
              setGov((s) => {
                const next = { ...s, outsideSources: !s.outsideSources };
                setAudit(
                  `Outside Sources → ${next.outsideSources ? "ON" : "OFF"} (simulated)`
                );
                return next;
              });
            }}
          />

          <RowButton
            label="Citation Required"
            hint="Toggle whether citations must be shown"
            value={
              gov.citationRequired ? (
                <Pill tone="good">ON</Pill>
              ) : (
                <Pill tone="neutral">OFF</Pill>
              )
            }
            onClick={() => {
              setGov((s) => {
                const next = { ...s, citationRequired: !s.citationRequired };
                setAudit(
                  `Citation Required → ${next.citationRequired ? "ON" : "OFF"} (simulated)`
                );
                return next;
              });
            }}
          />

          <RowButton
            label="Leakage Risk"
            hint="Cycle LOW → MED → HIGH"
            value={<Pill tone={riskTone}>{gov.leakageRisk}</Pill>}
            onClick={() => {
              setGov((s) => {
                const next = { ...s, leakageRisk: nextRisk(s.leakageRisk) };
                setAudit(`Leakage Risk → ${next.leakageRisk} (simulated)`);
                return next;
              });
            }}
          />
        </div>

        <AnimatedMeter
          variant="dark"
          value={riskToPercent(gov.leakageRisk)}
          label="Leakage risk (simulated)"
          color={riskToColor(gov.leakageRisk)}
          className="pt-1"
        />

        <div className="pt-2 border-t border-white/10">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-white/60">Audit</span>
            <span className="text-white/50">simulated</span>
          </div>
          <p className="text-[11px] text-white/80 mt-2 line-clamp-2">{audit}</p>
        </div>
      </div>
    </div>
  );
}


