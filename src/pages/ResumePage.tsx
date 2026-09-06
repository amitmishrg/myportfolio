import { useEffect } from "react"
import { Github, Globe, Linkedin, Mail, Music, Phone, Twitter, Waves } from "lucide-react"
import { site } from "../data/site"
import "./resume.css"

type Job = (typeof site.experience)[number]
type IconCmp = React.ComponentType<{
  className?: string
  strokeWidth?: number
}>

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
      <path d="M14 2 L18 6 L8 16 L4 12 Z" />
      <path d="M15.5 4.5 L19 1" />
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
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13 13 L19 19" />
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

function SkillGroups() {
  const groups = [
    { title: "AI & Agent Engineering", skills: site.skills.aiAgent },
    { title: "Frontend Architecture", skills: site.skills.frontendArch },
    { title: "Platform & Infrastructure", skills: site.skills.platform },
    { title: "Performance & Quality", skills: site.skills.perfQuality },
  ]
  return (
    <div className="resume-skills-grid">
      {groups.map((g) => (
        <div key={g.title} className="resume-skill-col">
          <div className="resume-skill-title">{g.title}</div>
          <p className="resume-skill-inline">{g.skills.join(" · ")}</p>
        </div>
      ))}
    </div>
  )
}

function ResumeTagline() {
  const { taglineTerms, taglineAccent } = site.resume
  return (
    <div className="resume-tagline">
      {taglineTerms.map((term, i) => (
        <span key={term}>
          {i > 0 ? (
            <span className="resume-tagline-sep" aria-hidden>
              ·
            </span>
          ) : null}
          <span
            className={
              term === taglineAccent
                ? "resume-tagline-term resume-tagline-term-accent"
                : "resume-tagline-term"
            }
          >
            {term}
          </span>
        </span>
      ))}
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

type OpenSourceResumeItem = (typeof site.openSource.featured)[number]

const resumeOpenSource: OpenSourceResumeItem[] = site.resume.openSourceNames
  .map((name) => site.openSource.featured.find((p) => p.name === name))
  .filter((p): p is OpenSourceResumeItem => p != null)

function metaForProject(p: OpenSourceResumeItem): string {
  const display = p.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
  if (p.meta.kind === "live") return `Live · ${display}`
  if (p.meta.kind === "stars") return `${p.meta.label} · ${display}`
  return display
}

function OpenSourceList() {
  return (
    <ul className="resume-os">
      {resumeOpenSource.map((p) => (
        <li key={p.name} className="resume-os-item">
          <a className="resume-os-link resume-link" href={p.href} target="_blank" rel="noreferrer">
            <span className="resume-os-text">
              <span className="resume-os-name">{p.name}</span>
              <span className="resume-os-sep"> — </span>
              <span className="resume-os-tagline">{p.tagline}</span>
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
    document.title = `${site.name} — Staff Frontend Engineer | Resume`
    document.body.classList.add("resume-body")
    return () => {
      document.body.classList.remove("resume-body")
    }
  }, [])

  const [job1, job2, job3] = site.experience
  const { experienceMaxBullets } = site.resume

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

      <article className="resume-page">
        <header className="resume-header">
          <div className="resume-header-left">
            <div className="resume-circle" aria-hidden>
              <span className="resume-circle-monogram">AM</span>
            </div>
            <div className="resume-name-block">
              <h1 className="resume-name">{site.name}</h1>
              <div className="resume-role">{site.role}</div>
              <ResumeTagline />
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
              <p className="resume-paragraph">{site.resume.profile}</p>
            </div>
          </div>
        </SectionRow>

        <SectionRow label="Work Experience">
          <JobEntry job={job1} maxBullets={experienceMaxBullets.axiamatic} showRule={true} />
          <JobEntry job={job2} maxBullets={experienceMaxBullets.medianet} />
          <JobEntry job={job3} maxBullets={experienceMaxBullets.earlier} />
        </SectionRow>

        <SectionRow label="Skills">
          <div className="resume-job-rule" aria-hidden>
            <span className="resume-job-rule-grey" />
            <span className="resume-job-rule-accent" />
          </div>
          <SkillGroups />
        </SectionRow>

        <SectionRow label="Open Source & Developer Tools">
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
