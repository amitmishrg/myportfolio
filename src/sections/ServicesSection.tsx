import { motion } from "framer-motion"
import { ArrowUpRight, Gauge, Layers, Sparkles } from "lucide-react"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site, type ServiceIcon } from "../data/site"

const icons: Record<ServiceIcon, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  sparkles: Sparkles,
  gauge: Gauge,
}

export function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="01" label="SERVICES" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="Where I can help"
          title="Three things I do"
          titleAccent="really well"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="grid gap-5 md:grid-cols-3"
        >
          {site.services.map((s, idx) => {
            const Icon = icons[s.icon]
            return (
              <motion.article
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.97 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.04] to-white/[0.015] p-7 transition-colors hover:border-white/25"
              >
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[conic-gradient(from_0deg,#ff6fd8,#ffd06b,#a0ff8f,#6bd4ff,#7c6bff,#ff6fd8)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif text-2xl text-zinc-500 italic">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-xl leading-tight font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.description}</p>

                <ul className="mt-5 space-y-1.5 text-[13px] text-zinc-300">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fuchsia-400/70" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="mb-3 h-px bg-linear-to-r from-white/15 via-white/5 to-transparent" />
                  <a
                    href={s.proof.href}
                    className="group/proof inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-zinc-500 uppercase transition-colors hover:text-white"
                  >
                    <span className="text-zinc-600">From</span>
                    <span className="text-zinc-300 transition-colors group-hover/proof:text-white">
                      {s.proof.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/proof:translate-x-0.5 group-hover/proof:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
