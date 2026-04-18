import { motion } from "framer-motion"

import { cn } from "../../lib/cn"

type Props = {
  eyebrow?: string
  /** Zero-padded numeric prefix, e.g. "01" */
  index?: string
  title: string
  /** Italic serif words spliced into the title for editorial contrast. */
  titleAccent?: string
  align?: "left" | "center"
  /** Use `light` on pale sections (About). */
  surface?: "dark" | "light"
  className?: string
  action?: React.ReactNode
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  titleAccent,
  align = "center",
  surface = "dark",
  className,
  action,
}: Props) {
  const titleColor = surface === "light" ? "text-zinc-900" : "text-white"
  const eyebrowColor = surface === "light" ? "text-zinc-500" : "text-zinc-400"

  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-6 sm:mb-16",
        align === "center"
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={align === "center" ? "max-w-3xl" : ""}
      >
        {eyebrow || index ? (
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase",
              eyebrowColor,
            )}
          >
            {index ? (
              <span className="font-serif text-base tracking-normal text-violet-400 italic">
                {index}
              </span>
            ) : null}
            {index && eyebrow ? <span className="h-px w-6 bg-current opacity-40" /> : null}
            {eyebrow ? <span>{eyebrow}</span> : null}
          </div>
        ) : null}
        <h2
          className={cn(
            "font-display text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl",
            titleColor,
          )}
        >
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span
                className={cn(
                  "font-serif italic",
                  surface === "light" ? "text-zinc-400" : "text-zinc-500",
                )}
              >
                {titleAccent}
              </span>
            </>
          ) : null}
        </h2>
      </motion.div>
      {action ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          {action}
        </motion.div>
      ) : null}
    </div>
  )
}
