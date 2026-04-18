import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import { cn } from "../../lib/cn"

type Props = {
  className?: string
}

const SEGMENTS = ["CAM_01", "ISO 800", "FREN", "SECURE_GRID_99"]

function formatElapsed(ms: number): string {
  const total = Math.floor(ms / 10) // 100 ticks / sec for the centiseconds
  const cs = total % 100
  const seconds = Math.floor(total / 100) % 60
  const minutes = Math.floor(total / 100 / 60) % 60
  const hours = Math.floor(total / 100 / 3600)
  const pad = (n: number) => n.toString().padStart(2, "0")
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(cs)}`
}

/**
 * A Killian-Herzer-inspired terminal readout bar. Displays a live
 * elapsed time, a blinking REC indicator, and a rotating set of
 * metadata segments. Drops over any container as an absolute element;
 * the parent should be `relative`.
 */
export function LiveTicker({ className }: Props) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = () => {
      setElapsed(performance.now() - start)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className={cn(
        "bg-canvas/80 inline-flex items-center gap-3 rounded-full border border-white/10 px-3 py-1.5",
        "font-mono text-[10px] tracking-[0.16em] text-zinc-200 uppercase backdrop-blur",
        className,
      )}
    >
      {/* Blinking REC dot */}
      <span className="inline-flex items-center gap-1.5">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-rose-500"
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-rose-400">REC</span>
      </span>

      <span className="h-3 w-px bg-white/15" />

      {/* Live elapsed time */}
      <span className="text-zinc-300 tabular-nums">{formatElapsed(elapsed)}</span>

      <span className="h-3 w-px bg-white/15" />

      {/* Scrolling/rotating metadata pills */}
      <span className="relative hidden h-3 w-[104px] overflow-hidden sm:inline-block">
        <motion.span
          className="absolute inset-0 flex flex-col"
          animate={{ y: [0, -12, -24, -36, -48] }}
          transition={{
            duration: SEGMENTS.length * 1.6,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          {[...SEGMENTS, SEGMENTS[0]].map((s, i) => (
            <span key={`${s}-${i}`} className="flex h-3 items-center text-[10px] text-zinc-400">
              {s}
            </span>
          ))}
        </motion.span>
      </span>
    </motion.div>
  )
}
