import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"

import { cn } from "../../lib/cn"

type Variant = "gradient" | "outline" | "ghost"

type Props = HTMLMotionProps<"button"> & {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  gradient:
    "bg-linear-to-r from-[#8b5cf6] via-[#a855f7] to-[#ec4899] text-white shadow-[0_0_40px_color-mix(in_oklab,#8b5cf6_35%,transparent)] hover:brightness-110",
  outline:
    "border border-white/15 bg-white/5 text-zinc-100 hover:border-white/30 hover:bg-white/10",
  ghost: "text-zinc-300 hover:text-white",
}

export function Button({ className, variant = "gradient", children, ...props }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5cf6]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
