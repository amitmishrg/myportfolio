import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { cn } from "../../lib/cn"

type Props = {
  /** Two-digit section index shown in the AI readout label. e.g. "02". */
  number: string
  /** Section name shown in the AI readout. Will be uppercased. */
  label: string
  /** Adjusts colours for light-on-light sections. */
  variant?: "dark" | "light"
}

/**
 * A scroll-triggered "AI scan" overlay for any section. Renders as two
 * sibling fragments so that:
 *   - the grid overlay sits BEHIND section content (z-0)
 *   - the scan line, AI readout, and HUD corners sit ABOVE content (z-20)
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <SectionScan number="01" label="SERVICES" />
 *     <div className="relative z-10">…section content…</div>
 *   </section>
 *
 * The scan runs once the first time the section enters the viewport and
 * then leaves behind subtle HUD corners + a "VERIFIED" pill.
 */
export function SectionScan({ number, label, variant = "dark" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapRef, { amount: 0.15, once: true })

  // Seed from the current media-query value (lazy init avoids setState-in-effect).
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const [phase, setPhase] = useState<"idle" | "scanning" | "complete">("idle")
  const scanControls = useAnimation()
  const gridControls = useAnimation()

  useEffect(() => {
    if (!inView || phase !== "idle") return

    let cancelled = false
    const run = async () => {
      // Reduced motion: skip the scan but still mark the section "verified".
      if (reducedMotion) {
        // Defer to a microtask so this setState isn't a synchronous effect-body update.
        await Promise.resolve()
        if (cancelled) return
        setPhase("complete")
        return
      }

      setPhase("scanning")
      gridControls.start({ opacity: 1, transition: { duration: 0.35 } })
      await scanControls.start({
        top: ["-10%", "110%"],
        transition: { duration: 1.3, ease: [0.33, 0, 0.67, 1] },
      })
      if (cancelled) return
      gridControls.start({ opacity: 0, transition: { duration: 0.5 } })
      setPhase("complete")
    }
    run()
    return () => {
      cancelled = true
    }
  }, [inView, phase, reducedMotion, scanControls, gridControls])

  const isLight = variant === "light"
  const textTone = isLight ? "text-zinc-700" : "text-zinc-300"
  const mutedTone = isLight ? "text-zinc-400" : "text-zinc-500"
  const accentTone = isLight ? "text-fuchsia-600" : "text-fuchsia-400"
  const successTone = isLight ? "text-emerald-600" : "text-emerald-400"
  const hudColor = isLight ? "rgb(82 82 91)" : "rgb(255 255 255 / 0.55)"
  const gridColor = isLight ? "rgba(24,24,27,0.06)" : "rgba(255,255,255,0.045)"
  const borderTone = isLight ? "border-zinc-900/15" : "border-white/15"

  return (
    <>
      {/* Invisible intersection sentinel + grid overlay — sits BEHIND content */}
      <div
        ref={wrapRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={gridControls}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Everything that must sit ABOVE content: scan line, labels, HUD. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {/* AI readout corner label */}
        <div className="absolute top-6 right-4 sm:top-10 sm:right-8">
          <AnimatePresence mode="wait" initial={false}>
            {phase === "scanning" ? (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase",
                  borderTone,
                )}
              >
                <span
                  className={cn("inline-flex h-1.5 w-1.5 rounded-full", {
                    "bg-fuchsia-400": !isLight,
                    "bg-fuchsia-600": isLight,
                  })}
                />
                <span className={textTone}>
                  SCAN_{number} <span className={mutedTone}>//</span>{" "}
                  <span className={accentTone}>ANALYZING</span>
                  <BlinkingCursor tone={isLight ? "dark" : "light"} />
                </span>
              </motion.div>
            ) : phase === "complete" ? (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase",
                  borderTone,
                )}
              >
                <svg className={cn("h-3 w-3", successTone)} viewBox="0 0 12 12" fill="none">
                  <motion.path
                    d="M2 6.5 L5 9 L10 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </svg>
                <span className={textTone}>
                  {label} <span className={mutedTone}>//</span>{" "}
                  <span className={successTone}>VERIFIED</span>
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* HUD corner brackets — appear after scan completes */}
        {phase === "complete" ? (
          <>
            <HudBracket corner="tl" color={hudColor} delay={0} />
            <HudBracket corner="tr" color={hudColor} delay={0.08} />
            <HudBracket corner="bl" color={hudColor} delay={0.16} />
            <HudBracket corner="br" color={hudColor} delay={0.24} />
          </>
        ) : null}

        {/* The scan line itself — only mounted while scanning */}
        {phase === "scanning" ? (
          <motion.div
            initial={{ top: "-10%" }}
            animate={scanControls}
            className="absolute inset-x-0 h-[200px]"
            style={{
              backgroundImage: isLight
                ? "linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0) 25%, rgba(139,92,246,0.1) 48%, rgba(236,72,153,0.22) 50%, rgba(139,92,246,0.1) 52%, rgba(6,182,212,0) 75%, transparent 100%)"
                : "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.15) 48%, rgba(236,72,153,0.35) 50%, rgba(255,255,255,0.15) 52%, rgba(6,182,212,0) 80%, transparent 100%)",
              mixBlendMode: isLight ? "multiply" : "screen",
            }}
          />
        ) : null}
      </div>
    </>
  )
}

function BlinkingCursor({ tone }: { tone: "light" | "dark" }) {
  return (
    <motion.span
      className={cn("ml-0.5 inline-block h-3 w-[2px] align-middle", {
        "bg-white": tone === "light",
        "bg-zinc-800": tone === "dark",
      })}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
    />
  )
}

function HudBracket({
  corner,
  color,
  delay,
}: {
  corner: "tl" | "tr" | "bl" | "br"
  color: string
  delay: number
}) {
  const size = 22
  const posClass = {
    tl: "top-4 left-4 sm:top-6 sm:left-6",
    tr: "top-4 right-4 sm:top-6 sm:right-6",
    bl: "bottom-4 left-4 sm:bottom-6 sm:left-6",
    br: "bottom-4 right-4 sm:bottom-6 sm:right-6",
  }[corner]
  const d = {
    tl: `M 0 ${size} L 0 0 L ${size} 0`,
    tr: `M 0 0 L ${size} 0 L ${size} ${size}`,
    bl: `M 0 0 L 0 ${size} L ${size} ${size}`,
    br: `M 0 ${size} L ${size} ${size} L ${size} 0`,
  }[corner]
  return (
    <motion.svg
      className={cn("absolute", posClass)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.4, delay }}
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth="1"
        strokeLinecap="square"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      />
    </motion.svg>
  )
}
