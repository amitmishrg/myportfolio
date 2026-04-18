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

export function OpenSourceSection() {
  return (
    <section id="open-source" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="06" label="OPEN SOURCE" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="Open source & experiments"
          title="Side projects"
          titleAccent="I built because I wanted to"
          align="left"
          action={
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="github"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold whitespace-nowrap text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Github className="h-4 w-4" />
              See more on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        />

        <p className="-mt-6 mb-10 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {site.openSource.blurb}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {site.openSource.projects.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="view"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.035] to-white/[0.01] p-7 transition-colors hover:border-white/25"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[conic-gradient(from_0deg,#ff6fd8,#ffd06b,#a0ff8f,#6bd4ff,#7c6bff,#ff6fd8)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl leading-tight font-semibold text-white">
                      {p.name}
                    </h3>
                    <MetaBadge label={p.meta.label} kind={p.meta.kind} />
                  </div>
                  <p className="mt-1 font-serif text-base text-zinc-400 italic">{p.tagline}</p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all group-hover:rotate-45 group-hover:border-white/30 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-300">{p.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-white/10 bg-white/2 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-400">
            Plenty more on GitHub — <span className="text-zinc-200">50+ repos</span>, a few hundred
            stars, and a long tail of half-finished experiments.
          </p>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
          >
            <Github className="h-4 w-4" />
            @amitmishrg
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
