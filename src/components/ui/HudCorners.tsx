import { motion } from "framer-motion"
import { cn } from "../../lib/cn"

type Props = {
  className?: string
  /** Size of each corner bracket in px. Defaults to 28. */
  size?: number
  /** Thickness of the bracket line. Defaults to 1.5. */
  stroke?: number
  /** Inset from the container edge in px. Defaults to 10. */
  inset?: number
  /** Colour of the brackets. Defaults to white. */
  color?: string
  /** Delay before the first bracket appears. */
  delay?: number
}

/**
 * Four HUD / camera viewfinder corner brackets that draw in with a
 * staggered stroke-dashoffset animation. Drops over any container — pair
 * it with `relative` on the parent.
 */
export function HudCorners({
  className,
  size = 28,
  stroke = 1.5,
  inset = 10,
  color = "white",
  delay = 0,
}: Props) {
  const pathLen = size * 2
  // Each corner is an L-shape drawn as a polyline. We animate dashoffset
  // from `pathLen` → 0 to reveal the lines.
  const corners = [
    {
      // top-left
      d: `M 0 ${size} L 0 0 L ${size} 0`,
      style: { top: inset, left: inset },
    },
    {
      // top-right
      d: `M 0 0 L ${size} 0 L ${size} ${size}`,
      style: { top: inset, right: inset },
    },
    {
      // bottom-left
      d: `M 0 0 L 0 ${size} L ${size} ${size}`,
      style: { bottom: inset, left: inset },
    },
    {
      // bottom-right
      d: `M 0 ${size} L ${size} ${size} L ${size} 0`,
      style: { bottom: inset, right: inset },
    },
  ]

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {corners.map((c, i) => (
        <motion.svg
          key={i}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          style={{ position: "absolute", ...c.style }}
        >
          <motion.path
            d={c.d}
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="square"
            initial={{ strokeDasharray: pathLen, strokeDashoffset: pathLen }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.svg>
      ))}
    </div>
  )
}
