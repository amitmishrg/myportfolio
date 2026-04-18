import { motion } from "framer-motion"
import { cn } from "../../lib/cn"

type Props = {
  className?: string
  /** Total duration of one sweep in seconds. */
  duration?: number
  /** Pause between sweeps in seconds. */
  pause?: number
}

/**
 * A chromatic scan line that sweeps vertically from top to bottom of its
 * parent (which must be `relative` with `overflow-hidden`). Used to imply
 * that the hero portrait is a live feed / being analysed.
 */
export function ScanLine({ className, duration = 2.8, pause = 4 }: Props) {
  const total = duration + pause
  // Animate from -10% → 110% of parent height, then hold off-screen.
  const sweepFraction = duration / total
  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 h-[140px]",
        "mix-blend-screen",
        className,
      )}
      initial={{ top: "-20%" }}
      animate={{ top: ["-20%", "110%", "110%"] }}
      transition={{
        duration: total,
        times: [0, sweepFraction, 1],
        ease: ["easeInOut", "linear"],
        repeat: Infinity,
      }}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.0) 20%, rgba(255,255,255,0.18) 48%, rgba(236,72,153,0.35) 50%, rgba(255,255,255,0.18) 52%, rgba(6,182,212,0.0) 80%, transparent 100%)",
      }}
    />
  )
}
