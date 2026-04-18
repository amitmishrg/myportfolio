import { motion, type Variants } from "framer-motion"
import { ArrowUpRight, Lock } from "lucide-react"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site } from "../data/site"

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

export function PortfolioSection() {
  return (
    <section id="work" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="04" label="PROJECTS" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Case study"
          title="Selected"
          titleAccent="projects."
          action={
            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white">
              Request more →
            </a>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="grid gap-6 md:grid-cols-12"
        >
          {site.projects.map((p, i) => {
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"]
            const isExternal = typeof p.href === "string" && p.href.startsWith("http")
            const hasLink = typeof p.href === "string" && p.href.length > 0

            const cardClass = `group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[#12121a] min-h-[320px] sm:min-h-[380px] md:min-h-[420px] ${spans[i] ?? "md:col-span-12"}`

            const inner = (
              <>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,11,13,0.92) 0%, rgba(11,11,13,0.6) 16%, rgba(11,11,13,0.1) 34%, rgba(11,11,13,0) 52%)",
                  }}
                />

                <span className="text-canvas absolute top-5 left-5 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  {p.category}
                </span>

                {"note" in p && p.note ? (
                  <span className="absolute top-5 right-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-zinc-200 uppercase backdrop-blur-md">
                    {!hasLink ? <Lock className="h-3 w-3" /> : null}
                    {p.note}
                  </span>
                ) : null}

                <div className="absolute right-5 bottom-5 left-5 z-10 flex items-end justify-between gap-4">
                  <h3 className="font-display text-2xl leading-tight font-semibold text-white sm:text-3xl">
                    {p.title}
                  </h3>
                  {hasLink ? (
                    <span className="text-canvas inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/95 transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                  ) : (
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur-md">
                      <Lock className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </>
            )

            if (hasLink) {
              return (
                <motion.a
                  key={p.title}
                  href={p.href as string}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  data-cursor="view"
                  variants={cardVariants}
                  className={cardClass}
                >
                  {inner}
                </motion.a>
              )
            }

            return (
              <motion.div
                key={p.title}
                data-cursor="locked"
                variants={cardVariants}
                className={`${cardClass} cursor-not-allowed`}
              >
                {inner}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
