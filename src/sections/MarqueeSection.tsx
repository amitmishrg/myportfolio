import { site } from "../data/site"

// Items that should get the fuchsia → violet accent treatment.
// Matches on the start of the word so "AI & MCP", "AGENTIC UI",
// "MCP", "Claude SDK", etc. all light up.
const ACCENT_MATCHERS = [
  /^AI/i,
  /MCP/i,
  /AGENTIC/i,
  /STREAMING/i,
  /REAL-TIME/i,
  /^Claude/i,
  /^OpenAI/i,
]

function isAccent(label: string) {
  return ACCENT_MATCHERS.some((r) => r.test(label))
}

type RowProps = {
  items: readonly string[]
  /** tailwind animation class */
  animationClass: string
  /** visual treatment */
  variant: "display" | "mono"
}

function MarqueeRow({ items, animationClass, variant }: RowProps) {
  const doubled = [...items, ...items]
  const isDisplay = variant === "display"

  return (
    <div className="group relative overflow-hidden py-2">
      <div
        className={`flex w-max gap-9 pr-9 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((t, i) => {
          const accent = isAccent(t)
          return (
            <div key={`${t}-${i}`} className="flex items-center gap-9">
              <span
                className={
                  isDisplay
                    ? [
                        "font-display text-sm font-semibold tracking-[0.22em] whitespace-nowrap sm:text-[12px]",
                        accent
                          ? "bg-linear-to-r from-fuchsia-300 via-violet-200 to-amber-200 bg-clip-text text-transparent"
                          : "text-white",
                      ].join(" ")
                    : [
                        "font-mono text-[10px] tracking-[0.28em] whitespace-nowrap uppercase sm:text-[11px]",
                        accent ? "text-fuchsia-300" : "text-zinc-400",
                      ].join(" ")
                }
              >
                {isDisplay ? t : `// ${t}`}
              </span>
              {isDisplay ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={accent ? "text-fuchsia-300/80" : "text-white/45"}
                  aria-hidden
                >
                  <path
                    d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <span
                  aria-hidden
                  className="inline-block h-[3px] w-[3px] rounded-full bg-zinc-600"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function MarqueeSection() {
  return (
    <div className="relative mt-8 border-y border-white/10 bg-black">
      {/* dotted backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ambient accent glow top + bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-fuchsia-400/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-violet-400/30 to-transparent"
      />

      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-black via-black/80 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-black via-black/80 to-transparent"
      />

      <div className="relative py-2">
        <MarqueeRow
          items={site.marquee}
          animationClass="animate-[marquee_70s_linear_infinite]"
          variant="display"
        />
        {/* hairline between rows */}
        <div
          aria-hidden
          className="mx-auto h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
        />
        <MarqueeRow
          items={site.marqueeStack}
          animationClass="animate-[marquee-reverse_90s_linear_infinite]"
          variant="mono"
        />
      </div>
    </div>
  )
}
