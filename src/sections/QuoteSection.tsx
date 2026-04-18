import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { site } from "../data/site"

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.09) 1px, transparent 0)`,
          backgroundSize: "26px 26px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        style={{
          background:
            "conic-gradient(from 0deg, #ff6fd8, #ffd06b, #a0ff8f, #6bd4ff, #7c6bff, #ff6fd8)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="text-canvas mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <Quote className="h-5 w-5" />
        </div>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display mt-8 text-3xl leading-[1.15] font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          <span className="text-zinc-400">“</span>
          {site.quote.text}
          <span className="text-zinc-400">”</span>
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 font-serif text-base text-zinc-400 italic"
        >
          — {site.quote.attribution}
        </motion.p>
      </div>
    </section>
  )
}
