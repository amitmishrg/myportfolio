import { motion } from "framer-motion"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site } from "../data/site"

export function AxiamaticSection() {
  const job = site.experience[0]

  return (
    <section id="axiamatic" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="04" label="SELECTED WORK" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Current role"
          title="Axiamatic"
          titleAccent="· Staff frontend"
          align="left"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="-mt-6 mb-10 max-w-3xl text-base leading-relaxed text-zinc-400"
        >
          {site.axiamatic.intro}
        </motion.p>

        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <span>{job.role}</span>
          <span aria-hidden>·</span>
          <span>{job.range}</span>
          <span aria-hidden>·</span>
          <span>{job.location}</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {site.axiamatic.highlights.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.04] to-white/[0.01] p-6 transition-colors hover:border-white/20"
            >
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
