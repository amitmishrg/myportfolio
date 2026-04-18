import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { site } from "../../data/site"
import { cn } from "../../lib/cn"

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#open-source", label: "Open source" },
  { href: "#contact", label: "Contact" },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      {/*
        Symmetric grid with equal left/right tracks so the middle column is
        mathematically centered in the pill. Tailwind arbitrary values can't
        parse `minmax(0,1fr)` (commas), so we set it inline.
      */}
      <div
        className={cn(
          "bg-canvas/70 mx-auto mt-4 grid w-full max-w-6xl items-center rounded-full border border-white/10 px-3 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-4",
        )}
        style={{
          gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)",
        }}
      >
        <a
          href="#"
          className="col-start-1 row-start-1 flex min-w-0 items-center gap-2 justify-self-start pl-2"
        >
          <span className="text-canvas inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-bold">
            am
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="col-start-2 row-start-1 hidden items-center gap-0.5 justify-self-center sm:gap-1 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-2.5 py-1.5 text-sm whitespace-nowrap text-zinc-300 transition-colors hover:bg-white/10 hover:text-white sm:px-3.5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 row-start-1 flex items-center justify-self-end">
          <a
            href="#contact"
            data-cursor="mail"
            className="text-canvas hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-zinc-200 md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-canvas/95 mx-4 mt-2 rounded-3xl border border-white/10 p-3 backdrop-blur md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-2xl px-4 py-3 text-sm text-zinc-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-canvas mt-2 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}

export function HeaderSpacer({ className }: { className?: string }) {
  return <div className={cn("h-[76px]", className)} />
}
