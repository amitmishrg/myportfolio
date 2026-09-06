import { motion } from "framer-motion"
import { ArrowUpRight, Github, Star } from "lucide-react"

import { SectionHeading } from "../components/ui/SectionHeading"
import { SectionScan } from "../components/ui/SectionScan"
import { site } from "../data/site"

type ProjectMetaKind = "live" | "repo" | "stars"

function MetaBadge({ label, kind }: { label: string; kind: ProjectMetaKind }) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"

  if (kind === "live") {
    return (
      <span className={`${base} border-emerald-400/30 bg-emerald-400/10 text-emerald-300`}>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {label}
      </span>
    )
  }
  if (kind === "stars") {
    return (
      <span className={`${base} border-amber-300/30 bg-amber-300/5 text-amber-200`}>
        <Star className="h-3 w-3 fill-current" strokeWidth={0} />
        {label.replace(/^\D+/, "")}
      </span>
    )
  }
  return (
    <span className={`${base} border-white/15 bg-white/5 text-zinc-300`}>
      <Github className="h-3 w-3" />
      {label}
    </span>
  )
}

type FeaturedProject = (typeof site.openSource.featured)[number]

function FeaturedCard({ p, idx }: { p: FeaturedProject; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      className="group relative flex flex-col rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.035] to-white/[0.01] p-6 transition-colors hover:border-white/25 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] tracking-[0.16em] text-zinc-500 uppercase">
            {p.category}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{p.name}</h3>
            <MetaBadge label={p.meta.label} kind={p.meta.kind} />
          </div>
          <p className="mt-1 font-serif text-sm text-zinc-400 italic">{p.tagline}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{p.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:text-white"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </a>
        {p.live ? (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:text-white"
          >
            Live demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}

export function OpenSourceSection() {
  return (
    <section id="open-source" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="06" label="OPEN SOURCE" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          eyebrow="Developer tools & experiments"
          title="Open Source &"
          titleAccent="Developer Tools"
          align="left"
          action={
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold whitespace-nowrap text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Github className="h-4 w-4" />
              @amitmishrg
              <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        />

        <p className="-mt-6 mb-10 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {site.openSource.blurb}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {site.openSource.featured.map((p, idx) => (
            <FeaturedCard key={p.name} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
