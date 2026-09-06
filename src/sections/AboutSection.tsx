import { motion, type Variants } from "framer-motion"
import { ArrowUpRight, GraduationCap, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site } from "../data/site"

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const nowRows: { label: string; value: string }[] = [
  { label: "Building", value: "eng-os · AgenticLens" },
  { label: "Shipping", value: "GhostCode · Talos platform work" },
  { label: "Stack", value: "React · TS · AI SDK · MCP" },
  { label: "Focus", value: "Streaming · platform · reliability" },
]

function useBangaloreTime() {
  const [time, setTime] = useState(() => formatIST(new Date()))
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatIST(new Date())), 30_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

function formatIST(date: Date) {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  })
}

export function AboutSection() {
  const localTime = useBangaloreTime()

  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden py-24 text-zinc-200 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -right-32 h-[560px] w-[560px] rounded-full opacity-[0.22] blur-[140px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236,72,153,0.6), rgba(139,92,246,0.3), transparent)",
        }}
      />

      <SectionScan number="09" label="ABOUT" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="09"
          eyebrow="About"
          title="Frontend systems"
          titleAccent="at scale"
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="max-w-[620px] font-serif text-[26px] leading-[1.25] text-white sm:text-[30px]"
            >
              {site.about.lead}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 h-px w-full bg-white/10" />

            <div className="mt-10 space-y-7">
              {site.about.body.map((p, i) => (
                <motion.div key={p} variants={fadeUp} className="grid grid-cols-[48px_1fr] gap-5">
                  <span
                    aria-hidden
                    className="pt-[7px] font-mono text-[11px] font-medium text-zinc-500 tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-[1.7] text-zinc-300">{p}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-14">
              <p className="mb-5 inline-flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.3em] text-zinc-500 uppercase">
                <span className="h-px w-8 bg-white/15" />
                What I care about
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {site.about.pillars.map((pillar, i) => (
                  <motion.div
                    key={pillar}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: i * 0.06 },
                      },
                    }}
                    className="rounded-2xl border border-white/10 bg-white/3 p-5"
                  >
                    <span className="h-2 w-2 rounded-full bg-fuchsia-400/80" aria-hidden />
                    <p className="font-display mt-4 text-[15px] leading-snug font-semibold text-white">
                      {pillar}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <motion.div
              variants={fadeUp}
              className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm"
            >
              <div className="relative flex items-center justify-between">
                <p className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.24em] text-emerald-300 uppercase">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Currently
                </p>
                <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-500 uppercase">
                  Bengaluru · <span className="text-zinc-300 tabular-nums">{localTime}</span> IST
                </p>
              </div>

              <div className="relative mt-7 flex items-start gap-3">
                <Terminal className="mt-[9px] h-4 w-4 shrink-0 text-fuchsia-300" aria-hidden />
                <p className="font-serif text-[22px] leading-[1.2] text-white">
                  Staff Frontend Engineer at{" "}
                  <span className="text-fuchsia-300 italic">Axiamatic</span>
                </p>
              </div>

              <dl className="relative mt-7 divide-y divide-white/5 font-mono text-[12px]">
                {nowRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[112px_1fr] items-start gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="tracking-[0.18em] text-zinc-500 uppercase">{row.label}</dt>
                    <dd className="text-zinc-200">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <p className="font-mono text-[10px] tracking-[0.24em] text-zinc-500 uppercase">
                  Open to Staff+ / Principal roles
                </p>
                <a
                  href="#contact"
                  className="group/cta inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] text-zinc-300 uppercase transition-colors hover:text-white"
                >
                  Say hi
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-5 rounded-3xl border border-white/10 bg-white/2 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-zinc-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] font-semibold tracking-[0.24em] text-zinc-500 uppercase">
                    Education
                  </p>
                  <p className="font-display mt-1 text-[15px] font-semibold text-white">
                    {site.education.degree}
                  </p>
                  <p className="mt-0.5 text-[13px] text-zinc-400">
                    {site.education.school} · {site.education.range}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-5 rounded-3xl border border-fuchsia-400/20 bg-fuchsia-400/5 p-6"
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.24em] text-fuchsia-300 uppercase">
                {site.about.highlight.stat}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {site.about.highlight.detail}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
