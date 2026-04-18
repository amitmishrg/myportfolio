import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(255,111,216,0.5), rgba(255,208,107,0.4), rgba(160,255,143,0.4), rgba(107,212,255,0.5), rgba(255,111,216,0.5))",
          filter: "blur(80px)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-20 sm:flex-row sm:items-end sm:px-6">
        <div>
          <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-zinc-400 uppercase">
            <span className="font-serif text-base tracking-normal text-violet-300 italic">✦</span>
            Availability
          </p>
          <h3 className="font-display max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl md:text-6xl">
            Got a gnarly frontend problem?{" "}
            <span className="font-serif text-zinc-400 italic">Let&apos;s make it boring.</span>
          </h3>
        </div>
        <motion.a
          href="#contact"
          data-cursor-label="LET'S TALK"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group text-canvas inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold"
        >
          Start the conversation
          <span className="bg-canvas inline-flex h-7 w-7 items-center justify-center rounded-full text-white transition-transform group-hover:rotate-45">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </motion.a>
      </div>
    </section>
  )
}
