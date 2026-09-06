import { motion } from "framer-motion"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site } from "../data/site"

export function ImpactSection() {
  return (
    <section id="impact" className="relative scroll-mt-28 overflow-hidden border-y border-white/10 bg-white/[0.015] py-16 sm:py-20">
      <SectionScan number="02" label="IMPACT" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Engineering outcomes"
          title="Measurable"
          titleAccent="impact"
          align="left"
          className="mb-8 sm:mb-10"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.impact.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4"
            >
              <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-300">{item.label}</p>
              <p className="mt-0.5 text-xs text-zinc-500">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
