import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { cn } from "../lib/cn"
import { site } from "../data/site"

export function CaseStudiesSection() {
  const [openId, setOpenId] = useState<string | null>(site.caseStudies[0]?.id ?? null)

  return (
    <section id="case-studies" className="relative scroll-mt-28 overflow-hidden border-y border-white/10 bg-white/[0.01] py-24 sm:py-32">
      <SectionScan number="05" label="CASE STUDIES" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="Flagship work"
          title="Case"
          titleAccent="studies"
          align="left"
        />

        <div className="space-y-4">
          {site.caseStudies.map((study, idx) => {
            const isOpen = openId === study.id
            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
              >
                <button
                  type="button"
                  id={`case-study-${study.id}-trigger`}
                  aria-expanded={isOpen}
                  aria-controls={`case-study-${study.id}-panel`}
                  onClick={() => setOpenId(isOpen ? null : study.id)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-white/[0.03] sm:p-8"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-semibold tracking-[0.24em] text-zinc-500 uppercase">
                      {study.subtitle}
                    </p>
                    <h3 className="font-display mt-2 text-xl font-semibold text-white sm:text-2xl">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{study.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-5 w-5 shrink-0 text-zinc-400 transition-transform",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>

                <div
                  id={`case-study-${study.id}-panel`}
                  role="region"
                  aria-labelledby={`case-study-${study.id}-trigger`}
                  hidden={!isOpen}
                  className={cn(!isOpen && "hidden")}
                >
                  <div className="space-y-6 border-t border-white/10 px-6 py-6 sm:px-8 sm:py-8">
                    {study.sections.map((section) => (
                      <div key={section.heading}>
                        <h4 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-violet-300 uppercase">
                          {section.heading}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{section.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
