import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site } from "../data/site"

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="05" label="EXPERIENCE" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="11 years,"
          titleAccent="one craft."
        />

        <ol className="divide-y divide-white/10 overflow-hidden rounded-[28px] border border-white/10 bg-white/2">
          {site.experience.map((job, idx) => (
            <motion.li
              key={`${job.company}-${job.range}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative grid gap-4 p-6 transition-colors hover:bg-white/4 sm:p-8 md:grid-cols-12 md:items-center md:gap-6"
            >
              <div className="flex items-baseline gap-4 md:col-span-1">
                <span className="font-serif text-2xl text-zinc-500 italic">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-4">
                <p className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {job.company}
                </p>
                <p className="mt-1 text-xs tracking-[0.18em] text-zinc-500 uppercase">
                  {job.location}
                </p>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm font-medium text-zinc-200">{job.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{job.summary}</p>

                {"highlights" in job && job.highlights?.length ? (
                  <ul className="relative mt-5 space-y-3">
                    {/*
                      Rail alignment maths:
                      - Each <li> is a flex row; the first child is an 11px-wide
                        dot column with the 7px dot centered inside it.
                      - That makes the dot's horizontal center sit at x=5.5px
                        from the <li>'s left edge.
                      - The rail is 1px wide at left=[5px], so its center is
                        also at x=5.5px — dots and rail align perfectly.
                    */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-[7px] bottom-[7px] left-[5px] w-px bg-linear-to-b from-fuchsia-400/60 via-violet-400/30 to-transparent"
                    />
                    <motion.span
                      aria-hidden
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "top" }}
                      className="pointer-events-none absolute top-[7px] bottom-[7px] left-[5px] w-px bg-linear-to-b from-white/60 via-fuchsia-300/40 to-transparent opacity-60"
                    />
                    {job.highlights.map((h, hi) => (
                      <motion.li
                        key={h}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.45,
                          delay: 0.15 + hi * 0.07,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative flex items-start gap-3.5 text-[13px] leading-relaxed text-zinc-300"
                      >
                        <span
                          aria-hidden
                          className="relative mt-[6px] flex h-[11px] w-[11px] shrink-0 items-center justify-center"
                        >
                          <span className="absolute inline-flex h-[11px] w-[11px] animate-pulse rounded-full bg-fuchsia-400/25" />
                          <span className="ring-canvas relative inline-block h-[7px] w-[7px] rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.55)] ring-2" />
                        </span>
                        <span className="min-w-0 flex-1">{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                <span className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase md:text-right">
                  {job.range}
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all group-hover:rotate-45 group-hover:border-white/30 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
