import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { SectionScan } from "../components/ui/SectionScan"
import { useCountUp } from "../hooks/useCountUp"
import { site } from "../data/site"

type Stat = (typeof site.stats)[number]

function StatCard({ stat, index, enabled }: { stat: Stat; index: number; enabled: boolean }) {
  const isNumeric = "value" in stat
  const target = isNumeric ? stat.value : 0
  const count = useCountUp(target, { enabled: enabled && isNumeric, duration: 1800 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex flex-col gap-3 border-white/10 px-6 py-8 md:border-r md:last:border-r-0"
    >
      <span className="font-serif text-sm text-violet-300 italic">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
        {isNumeric ? (
          <>
            {count}
            {"suffix" in stat && stat.suffix ? (
              <span className="text-fuchsia-400">{stat.suffix}</span>
            ) : null}
          </>
        ) : (
          "text" in stat && stat.text
        )}
      </p>
      <p className="text-sm text-zinc-400">{stat.label}</p>
    </motion.div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.015] py-4">
      <SectionScan number="02" label="METRICS" />
      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
          {site.stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} enabled={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
