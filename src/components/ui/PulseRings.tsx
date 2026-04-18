import { motion } from "framer-motion"
import { cn } from "../../lib/cn"

type Props = {
  className?: string
  /** Colour of the rings (any CSS colour). */
  color?: string
  /** Number of concentric rings. */
  count?: number
  /** Base size of the inner dot in px. */
  size?: number
}

/**
 * A radar-style pulse: one solid centre dot surrounded by `count` rings
 * that scale outwards and fade away in a staggered loop. Much more
 * expressive than Tailwind's built-in `animate-ping`.
 */
export function PulseRings({
  className,
  color = "rgb(52 211 153)", // emerald-400
  count = 3,
  size = 8,
}: Props) {
  return (
    <span
      aria-hidden
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ borderColor: color, borderWidth: 1, borderStyle: "solid" }}
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 3.4, opacity: 0 }}
          transition={{
            duration: 2.2,
            delay: (i * 2.2) / count,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      <span
        className="relative rounded-full"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    </span>
  )
}
