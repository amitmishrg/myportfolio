import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, Sparkles, Star } from "lucide-react"

import { AnimatedUnderline } from "../components/ui/AnimatedUnderline"
import { ChromaticBlob } from "../components/ui/ChromaticBlob"
import { HudCorners } from "../components/ui/HudCorners"
import { LiveTicker } from "../components/ui/LiveTicker"
import { PulseRings } from "../components/ui/PulseRings"
import { ScanLine } from "../components/ui/ScanLine"
import { site } from "../data/site"

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="via-canvas/70 to-canvas pointer-events-none absolute inset-0 bg-linear-to-b from-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-10 pb-12 sm:px-6 md:grid-cols-12 md:gap-8 md:pt-14 lg:pt-16">
        <div className="md:col-span-7">
          <motion.div {...fade(0)} className="mb-12 flex items-center gap-3 text-sm text-zinc-300">
            <PulseRings />
            <span className="text-zinc-400">Available for staff & platform roles</span>
          </motion.div>

          <motion.p
            {...fade(0.05)}
            className="font-serif text-4xl leading-none text-zinc-200 italic sm:text-5xl"
          >
            {site.hero.greeting}
          </motion.p>

          <motion.h1
            {...fade(0.12)}
            className="font-display mt-2 text-[2.5rem] leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl md:text-[3.75rem] lg:text-[4.75rem]"
          >
            <span className="block">{site.hero.firstName}</span>
            <span className="relative inline-block">
              <span className="block bg-linear-to-r from-[#ff6fd8] via-[#ffd06b] to-[#6bd4ff] bg-clip-text font-serif font-normal text-transparent italic">
                {site.hero.lastName}.
              </span>
              <AnimatedUnderline
                delay={0.9}
                color="url(#heroUnderlineGradient)"
                className="-bottom-1 left-0"
              />
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient id="heroUnderlineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ff6fd8" />
                    <stop offset="50%" stopColor="#ffd06b" />
                    <stop offset="100%" stopColor="#6bd4ff" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.div {...fade(0.2)} className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />
            <span className="inline-flex items-center gap-2 font-serif text-xl text-zinc-300 italic">
              {site.hero.roleTag}
              <Sparkles className="h-4 w-4 text-fuchsia-300" />
            </span>
          </motion.div>

          <motion.p
            {...fade(0.26)}
            className="mt-9 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {site.hero.subline}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-30 flex flex-wrap items-center gap-5">
            <motion.a
              href="#contact"
              data-cursor-label="LET'S TALK"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group text-canvas relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold transition-colors"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-linear-to-r from-transparent via-fuchsia-200/80 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]" />
            </motion.a>
            <a
              href={site.assets.resumePdf}
              download={site.assets.resumeDownloadName}
              data-cursor="download"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white"
            >
              <span className="border-b border-white/30 pb-0.5 transition-colors group-hover:border-white">
                Download Resume
              </span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <div className="relative md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto aspect-4/5 w-full max-w-sm md:max-w-none"
          >
            {/* Chromatic halo sitting behind the portrait card */}
            <ChromaticBlob
              size="full"
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <motion.div
              aria-hidden
              className="absolute top-6 -left-6 hidden text-white/40 sm:block"
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="h-10 w-10 fill-white/10" strokeWidth={1} />
            </motion.div>

            <motion.div
              aria-hidden
              className="absolute top-16 -right-3 hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <motion.path
                  d="M5 70 Q 40 5, 75 65"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <motion.path
                  d="M70 55 L 75 65 L 65 66"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 2.3, ease: "easeOut" }}
                />
              </svg>
            </motion.div>

            <div className="relative h-full w-full">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
                <img
                  src={site.assets.heroPortrait}
                  alt={site.name}
                  className="h-full w-full object-cover object-[center_25%]"
                />

                {/* Chromatic scan line that sweeps down the portrait */}
                <ScanLine />

                {/* HUD corner brackets draw in on mount */}
                <HudCorners delay={0.5} inset={14} size={26} />

                {/* Metadata labels — top-left and top-right */}
                <motion.span
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase"
                >
                  SUBJECT_01
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.45 }}
                  className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase"
                >
                  48.8° N / 2.3° E
                </motion.span>

                <div className="from-canvas/60 pointer-events-none absolute inset-0 bg-linear-to-t via-transparent to-transparent" />

                {/* Live feed ticker — sits inside the portrait, bottom-left */}
                <LiveTicker className="absolute bottom-5 left-5" />
              </div>

              <motion.div
                initial={{ rotate: -10, scale: 0 }}
                animate={{ rotate: -10, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
                className="bg-canvas absolute top-[30%] -left-6 flex h-24 w-24 items-center justify-center rounded-full text-white shadow-xl ring-1 ring-white/10 sm:h-28 sm:w-28"
              >
                <span className="font-serif text-3xl italic">Hello</span>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-canvas/90 absolute right-4 -bottom-4 rounded-2xl border border-white/10 px-4 py-3 text-xs text-zinc-200 backdrop-blur"
              >
                <p className="font-semibold text-white">11+ years</p>
                <p className="text-[11px] text-zinc-500">Shipping at scale</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
