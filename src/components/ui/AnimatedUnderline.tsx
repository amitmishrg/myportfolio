import { motion } from "framer-motion"
import { cn } from "../../lib/cn"

type Props = {
  className?: string
  /** Delay before the underline starts drawing in seconds. */
  delay?: number
  /** Colour of the stroke (pass any CSS colour). */
  color?: string
  /** Stroke thickness in px. */
  stroke?: number
}

/**
 * A hand-drawn underline SVG that "writes itself" via stroke-dashoffset
 * when mounted. Designed to sit directly under a word or phrase — its
 * container should be `relative`. The path is a subtle organic curve
 * rather than a straight line so it feels editorial.
 */
export function AnimatedUnderline({
  className,
  delay = 0,
  color = "currentColor",
  stroke = 2,
}: Props) {
  const pathLen = 330 // approximation of the path length, used for the dash
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 320 18"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute h-[14px] w-full", className)}
      fill="none"
    >
      <motion.path
        d="M2 12 C 60 4, 130 16, 200 8 S 300 14, 318 6"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        initial={{ strokeDasharray: pathLen, strokeDashoffset: pathLen }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.svg>
  )
}
