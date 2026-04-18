import { Github, Linkedin, Mail } from "lucide-react"

import { site } from "../../data/site"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-zinc-500 uppercase">
              Reach out
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-display mt-3 block text-2xl font-semibold break-all text-white hover:underline sm:text-4xl md:text-4xl"
            >
              {site.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={site.social.github}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={site.social.linkedin}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={site.url} className="hover:text-zinc-300">
              {site.url.replace(/^https?:\/\//, "")}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-zinc-300">
              {site.phone}
            </a>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
