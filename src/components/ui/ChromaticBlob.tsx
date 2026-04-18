import { motion } from "framer-motion"

import { cn } from "../../lib/cn"

type Props = {
  className?: string
  /** "full" uses a huge spread; "soft" is smaller and less saturated. */
  size?: "full" | "soft"
}

/**
 * Iridescent chromatic blob — the signature background motif used in the hero
 * and key CTAs. Uses a conic gradient + blur + slow morphing border-radius.
 */
export function ChromaticBlob({ className, size = "full" }: Props) {
  const dimensions = size === "full" ? "h-[620px] w-[620px]" : "h-[360px] w-[360px]"
  const blur = size === "full" ? "blur-3xl" : "blur-2xl"

  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute", dimensions, className)}
      initial={{ opacity: 0.8, scale: 0.2 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1.2, ease: "linear" }}
    >
      <div
        className={cn(
          "animate-blob h-full w-full",
          blur,
          "bg-[conic-gradient(from_90deg_at_50%_50%,#ff6fd8,#ffd06b,#a0ff8f,#6bd4ff,#7c6bff,#ff6fd8)]",
          "opacity-80",
        )}
      />
    </motion.div>
  )
}
