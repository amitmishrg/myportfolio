import { motion } from "framer-motion"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site } from "../data/site"

const groups = [
  { key: "aiAgent" as const, label: "AI & agent engineering" },
  { key: "frontendArch" as const, label: "Frontend architecture" },
  { key: "platform" as const, label: "Platform & infrastructure" },
  { key: "perfQuality" as const, label: "Performance & quality" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="08" label="SKILLS" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="08"
          eyebrow="Technical capabilities"
          title="What I"
          titleAccent="work with"
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
            >
              <h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.skills[group.key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[12px] font-medium text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
