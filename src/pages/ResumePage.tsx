import { useEffect } from "react"
import { Github, Globe, Linkedin, Mail, Music, Phone, Twitter, Waves } from "lucide-react"
import { site } from "../data/site"
import "./resume.css"

type Job = (typeof site.experience)[number]
type IconCmp = React.ComponentType<{
  className?: string
  strokeWidth?: number
}>

/* -------- Custom sport icons (Lucide has no cricket bat / TT paddle). */
function CricketIcon({
  className,
  strokeWidth = 1.8,
}: {
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* bat blade — angled rectangle */}
      <path d="M14 2 L18 6 L8 16 L4 12 Z" />
      {/* handle */}
      <path d="M15.5 4.5 L19 1" />
      {/* ball */}
      <circle cx="5" cy="20" r="1.6" />
    </svg>
  )
}

function TableTennisIcon({
  className,
  strokeWidth = 1.8,
}: {
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* paddle face */}
      <circle cx="9" cy="9" r="5.5" />
      {/* handle */}
      <path d="M13 13 L19 19" />
      {/* ball */}
      <circle cx="19" cy="5" r="1.4" />
    </svg>
  )
}

function AccentBar() {
  return <span className="resume-accent-bar" aria-hidden />
}

function LabelRule() {
  return <span className="resume-label-rule" aria-hidden />
}

function JobEntry({
  job,
  maxBullets,
  showRule,
}: {
  job: Job
  maxBullets?: number
  showRule?: boolean
}) {
  const allHighlights = "highlights" in job && job.highlights ? job.highlights : []
  // `maxBullets === 0` forces the short summary line (used for older roles so
  // the whole resume stays on one A4 page).
  const highlights = maxBullets != null ? allHighlights.slice(0, maxBullets) : allHighlights
  return (
    <article className="resume-job">
      <div className="resume-job-rule" aria-hidden>
        {showRule && <span className="resume-job-rule-grey" />}
        {showRule && <span className="resume-job-rule-accent" />}
      </div>
      <div className="resume-job-body">
        <div className="resume-job-meta">
          <div className="resume-job-range">{job.range}</div>
          <div className="resume-job-company">{job.company}</div>
          <div className="resume-job-location">{job.location}</div>
        </div>
        <div className="resume-job-details">
          <div className="resume-job-role">{job.role}</div>
          {highlights.length ? (
            <ul className="resume-bullets">
              {highlights.map((h) => (
                <li key={h}>
                  <span className="resume-bullet-dash">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="resume-job-summary">{job.summary}</p>
          )}
        </div>
      </div>
    </article>
  )
}

/* Pre-2017 roles are compressed into a single "Earlier Experience" entry so
   the resume stays on one A4 page without losing the timeline signal. The
   portfolio's ExperienceSection still renders each of these jobs in full. */
const EARLIER_SHORT_NAMES: Record<string, string> = {
  "Onlinemocks Pvt. Ltd.": "Onlinemocks",
  "Collegedunia Web Pvt. Ltd.": "Collegedunia",
  "Rising Hues Technologies LLP": "Rising Hues",
}

function EarlierExperience({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) return null
  const newest = jobs[0]
  const oldest = jobs[jobs.length - 1]
  const startYear = oldest.range.split("—")[0]?.trim().slice(-4) ?? ""
  const endYear = newest.range.split("—")[1]?.trim().slice(-4) ?? ""
  const range = `${startYear} — ${endYear}`
  const locations = Array.from(new Set(jobs.map((j) => j.location))).join(" · ")

  return (
    <article className="resume-job">
      <div className="resume-job-rule" aria-hidden>
        <span className="resume-job-rule-grey" />
      </div>
      <div className="resume-job-body">
        <div className="resume-job-meta">
          <div className="resume-job-range">{range}</div>
          <div className="resume-job-company">Earlier Experience</div>
          <div className="resume-job-location">{locations}</div>
        </div>
        <div className="resume-job-details">
          <div className="resume-job-role">Frontend Engineer — first three years</div>
          <ul className="resume-bullets">
            {jobs.map((j) => {
              const shortName = EARLIER_SHORT_NAMES[j.company] ?? j.company
              return (
                <li key={j.company}>
                  <span className="resume-bullet-dash">—</span>
                  <span>
                    <strong>{shortName}</strong> — {j.summary}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </article>
  )
}

function SectionRow({
  label,
  sub,
  labelExtra,
  children,
}: {
  label: string
  sub?: string
  labelExtra?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="resume-section">
      <div className="resume-section-label">
        <div className="resume-section-title">{label}</div>
        <LabelRule />
        {sub ? <div className="resume-section-sub">{sub}</div> : null}
        {labelExtra ? <div className="resume-section-extra">{labelExtra}</div> : null}
      </div>
      <div className="resume-section-body">{children}</div>
    </section>
  )
}

function ContactCell({
  Icon,
  label,
  value,
  href,
  compact,
}: {
  Icon: IconCmp
  label: string
  value: string
  href?: string
  /** Single-line inline variant — used for socials in the header sub-row. */
  compact?: boolean
}) {
  const Wrapper: React.ElementType = href ? "a" : "div"
  const wrapperProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }
    : {}
  if (compact) {
    return (
      <Wrapper
        className="resume-contact-cell resume-contact-cell-compact resume-link"
        {...wrapperProps}
        aria-label={`${label}: ${value}`}
      >
        <Icon className="resume-contact-icon-compact" strokeWidth={1.6} />
        <span className="resume-contact-value-compact">{value}</span>
      </Wrapper>
    )
  }
  return (
    <Wrapper className="resume-contact-cell resume-link" {...wrapperProps}>
      <Icon className="resume-contact-icon" strokeWidth={1.5} />
      <div className="resume-contact-text">
        <div className="resume-contact-label">{label}</div>
        <div className="resume-contact-value">{value}</div>
      </div>
    </Wrapper>
  )
}

// Two balanced columns — Frontend on the left, AI + everything that keeps
// production healthy on the right. Ordered by where I spend the most hours
// so the bar weights read honestly.
const skillsFrontend: Array<[string, number]> = [
  ["React", 90],
  ["TypeScript", 85],
  ["Next.js", 85],
  ["Tailwind", 95],
  ["Node.js", 80],
  ["React Query / SWR", 85],
  ["Storybook", 85],
]

const skillsAiTooling: Array<[string, number]> = [
  ["Claude SDK", 90],
  ["MCP", 85],
  ["AI-SDK", 80],
  ["React Testing Library", 82],
  ["Lighthouse / DevTools", 90],
  ["Sentry / Heap profiling", 85],
  ["Vite / Webpack", 86],
  ["Figma", 88],
]

function SkillList({ title, items }: { title: string; items: Array<[string, number]> }) {
  return (
    <div className="resume-skill-col">
      <div className="resume-skill-title">{title}</div>
      <div className="resume-skill-list">
        {items.map(([name, level]) => (
          <div key={name} className="resume-skill-row">
            <div className="resume-skill-name">{name}</div>
            <div className="resume-skill-bar" aria-hidden>
              <span className="resume-skill-fill" style={{ width: `${level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const interests: Array<{ icon: IconCmp; label: string }> = [
  { icon: CricketIcon, label: "Cricket" },
  { icon: TableTennisIcon, label: "Table Tennis" },
  { icon: Waves, label: "Swimming" },
  { icon: Music, label: "Music" },
]

function Interests() {
  return (
    <div className="resume-interests">
      {interests.map(({ icon: Icon, label }) => (
        <div key={label} className="resume-interest-item">
          <div className="resume-interest-bubble">
            <Icon className="resume-interest-icon" strokeWidth={2} />
          </div>
          <div className="resume-interest-label">{label}</div>
        </div>
      ))}
    </div>
  )
}

/* -------- Open-source row.
   One line per project: bold name → tagline → meta badge on the right.
   Resume-tightened taglines (the data/site.ts copies are written for the
   long-form portfolio page; here we want crisp single-liners). */
const openSourceTaglines: Record<string, string> = {
  AgenticLens: "Visualize and debug AI agent workflows.",
  "code-resume": "Offline-first resume builder with PDF export.",
  Picksy: "Two-choice social voting with a personalised trending feed.",
  "WebMCP ShopQuick": "Shopping cart exposed as AI tools via WebMCP.",
}

function metaForProject(p: (typeof site.openSource.projects)[number]): string {
  // Strip protocol/`www.` so URLs read as plain domains in print.
  const display = p.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
  if (p.meta.kind === "live") return `Live · ${display}`
  if (p.meta.kind === "stars") return `${p.meta.label} · ${display}`
  return display
}

function OpenSourceList() {
  return (
    <ul className="resume-os">
      {site.openSource.projects.map((p) => (
        <li key={p.name} className="resume-os-item">
          <a className="resume-os-link resume-link" href={p.href} target="_blank" rel="noreferrer">
            <span className="resume-os-text">
              <span className="resume-os-name">{p.name}</span>
              <span className="resume-os-sep"> — </span>
              <span className="resume-os-tagline">{openSourceTaglines[p.name] ?? p.tagline}</span>
            </span>
            <span className="resume-os-meta">{metaForProject(p)}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function ResumePage() {
  useEffect(() => {
    document.title = `${site.name} — Resume`
    document.body.classList.add("resume-body")
    return () => {
      document.body.classList.remove("resume-body")
    }
  }, [])

  const [job1, job2, job3, job4, job5] = site.experience

  return (
    <div className="resume-root">
      <div className="resume-toolbar">
        <div className="resume-toolbar-inner">
          <span className="resume-toolbar-hint">
            Tip — press <kbd>⌘</kbd>/<kbd>Ctrl</kbd>+<kbd>P</kbd> and choose “Save as PDF” at A4
            size.
          </span>
          <button type="button" className="resume-toolbar-btn" onClick={() => window.print()}>
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* =================== PAGE 1 =================== */}
      <article className="resume-page">
        <header className="resume-header">
          <div className="resume-header-left">
            <div className="resume-circle" aria-hidden>
              <span className="resume-circle-monogram">AM</span>
            </div>
            <div className="resume-name-block">
              <h1 className="resume-name">{site.name}</h1>
              <div className="resume-role">{site.role}</div>
              <div className="resume-tagline">
                <span className="resume-tagline-term">Frontend Platform</span>
                <span className="resume-tagline-sep" aria-hidden>
                  ·
                </span>
                <span className="resume-tagline-term resume-tagline-term-accent">AI Products</span>
                <span className="resume-tagline-sep" aria-hidden>
                  ·
                </span>
                <span className="resume-tagline-term">Perf</span>
              </div>
            </div>
          </div>
          <div className="resume-header-right">
            <div className="resume-contact-grid">
              <ContactCell
                Icon={Phone}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
              />
              <ContactCell
                Icon={Mail}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactCell Icon={Globe} label="Website" value="amitmishrg.in" href={site.url} />
            </div>
            <div className="resume-contact-socials">
              <ContactCell
                Icon={Github}
                label="GitHub"
                value="github.com/amitmishrg"
                href={site.social.github}
                compact
              />
              <ContactCell
                Icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/amitmishrg"
                href={site.social.linkedin}
                compact
              />
              <ContactCell
                Icon={Twitter}
                label="X"
                value="@amitmishrg"
                href={site.social.twitter}
                compact
              />
            </div>
          </div>
        </header>

        <SectionRow
          label="Address"
          labelExtra={
            <div className="resume-address">
              <div>Bangalore,</div>
              <div>Karnataka, India</div>
            </div>
          }
        >
          <div className="resume-profile-block">
            <div className="resume-profile-heading">
              <span className="resume-profile-title">Profile</span>
              <AccentBar />
            </div>
            <div className="resume-profile">
              <img
                src="/images/amit-portrait.png"
                alt={`${site.name} portrait`}
                className="resume-portrait"
              />
              <p className="resume-paragraph">{site.hero.subline}</p>
            </div>
          </div>
        </SectionRow>

        <SectionRow label="Work Experience">
          {/* Top three achievements for the two most recent roles — enough */}
          {/* signal without blowing past a single A4 page. */}
          <JobEntry job={job1} maxBullets={5} showRule={true} />
          <JobEntry job={job2} maxBullets={5} />
          {/* Older roles collapsed into one block — see EarlierExperience. */}
          <EarlierExperience jobs={[job3, job4, job5]} />
        </SectionRow>

        <SectionRow label="Skills">
          <div className="resume-job-rule" aria-hidden>
            <span className="resume-job-rule-grey" />
            <span className="resume-job-rule-accent" />
          </div>
          <div className="resume-skills-grid">
            <SkillList title="Frontend" items={skillsFrontend} />
            <SkillList title="AI, testing & perf" items={skillsAiTooling} />
          </div>
        </SectionRow>

        <SectionRow label="Open Source">
          <div className="resume-job-rule" aria-hidden>
            <span className="resume-job-rule-grey" />
            <span className="resume-job-rule-accent" />
          </div>
          <OpenSourceList />
        </SectionRow>

        <SectionRow label="Education">
          <article className="resume-job">
            <div className="resume-job-rule" aria-hidden>
              <span className="resume-job-rule-grey" />
              <span className="resume-job-rule-accent" />
            </div>
            <div className="resume-job-body">
              <div className="resume-job-meta">
                <div className="resume-job-range">{site.education.range}</div>
                <div className="resume-job-company">{site.education.school}</div>
                <div className="resume-job-location">Lucknow, India</div>
              </div>
              <div className="resume-job-details">
                <div className="resume-job-role">{site.education.degree}</div>
              </div>
            </div>
          </article>
        </SectionRow>

        <SectionRow label="Interests">
          <div className="resume-job-rule" aria-hidden>
            <span className="resume-job-rule-grey" />
            <span className="resume-job-rule-accent" />
          </div>
          <Interests />
        </SectionRow>

      </article>
    </div>
  )
}
