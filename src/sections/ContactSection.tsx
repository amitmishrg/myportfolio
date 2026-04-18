import { motion } from "framer-motion"
import { ArrowRight, Check, Loader2, X } from "lucide-react"
import { useMemo, useState } from "react"

import { SectionScan } from "../components/ui/SectionScan"
import { Tag } from "../components/ui/Tag"
import { site } from "../data/site"

// Web3Forms access key — set VITE_WEB3FORMS_KEY in a .env file to enable
// real email delivery. When empty, the form falls back to opening the
// user's mail client with a pre-filled message (the previous behaviour).
const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY ?? "") as string
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"

type SubmitStatus = "idle" | "sending" | "sent" | "error"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`)
    const body = encodeURIComponent(
      [
        email ? `From: ${email}` : "",
        "",
        message,
        "",
        tags.length ? `Interests: ${tags.join(", ")}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    )
    return `mailto:${site.email}?subject=${subject}&body=${body}`
  }, [email, message, name, tags])

  const toggleTag = (t: string) =>
    setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // No backend key → legacy mailto behaviour.
    if (!WEB3FORMS_KEY) {
      window.location.href = mailto
      return
    }

    setStatus("sending")
    setErrorMessage(null)

    try {
      const formData = new FormData()
      formData.append("access_key", WEB3FORMS_KEY)
      formData.append("subject", `Portfolio inquiry from ${name || "visitor"}`)
      formData.append("from_name", name || "Portfolio visitor")
      formData.append("name", name)
      formData.append("email", email)
      formData.append("message", message)
      if (tags.length) formData.append("interests", tags.join(", "))
      // Small honeypot — ignored by humans, bots fill it in.
      formData.append("botcheck", "")

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      })
      const data = (await res.json()) as {
        success?: boolean
        message?: string
      }

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong sending your message.")
      }

      setStatus("sent")
      setName("")
      setEmail("")
      setMessage("")
      setTags([])
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Couldn't send — try again.")
    }
  }

  const isSending = status === "sending"

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <SectionScan number="07" label="CONTACT" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-zinc-400 uppercase">
            <span className="font-serif text-base tracking-normal text-violet-400 italic">06</span>
            <span className="h-px w-6 bg-current opacity-40" />
            Contact
          </p>
          <h2 className="font-display text-5xl leading-[0.98] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            Say{" "}
            <span className="bg-linear-to-r from-[#ff6fd8] via-[#ffd06b] to-[#6bd4ff] bg-clip-text font-serif text-transparent italic">
              Hi!
            </span>{" "}
            <span className="block sm:inline">and tell me</span>
            <br />
            <span className="inline-flex items-center gap-4">
              about your idea
              <svg
                width="64"
                height="20"
                viewBox="0 0 64 20"
                fill="none"
                className="hidden text-white/60 sm:inline"
              >
                <path d="M2 10 L55 10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M45 3 L55 10 L45 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-zinc-400 sm:text-base">
            {site.contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-14 max-w-2xl rounded-[32px] border border-white/10 bg-white/3 p-6 backdrop-blur sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-left text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-canvas/60 mt-2 w-full rounded-2xl border border-white/10 px-4 py-3.5 text-sm text-white transition-colors outline-none focus:border-violet-500/60"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label className="block text-left text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="bg-canvas/60 mt-2 w-full rounded-2xl border border-white/10 px-4 py-3.5 text-sm text-white outline-none focus:border-violet-500/60"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <div className="mt-6">
            <p className="text-left text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              What do you need?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.contact.serviceTags.map((t) => (
                <Tag key={t} active={tags.includes(t)} onClick={() => toggleTag(t)}>
                  {t}
                </Tag>
              ))}
            </div>
          </div>

          <label className="mt-6 block text-left text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="bg-canvas/60 mt-2 w-full resize-none rounded-2xl border border-white/10 px-4 py-3.5 text-sm text-white outline-none focus:border-violet-500/60"
              placeholder="A sentence or two is perfect."
              required
            />
          </label>

          {/* Status banner */}
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/6 px-4 py-3 text-sm text-emerald-200"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <div>
                <p className="font-medium">Message on its way.</p>
                <p className="text-xs text-emerald-300/80">
                  I'll get back to you at the email you provided.
                </p>
              </div>
            </motion.div>
          ) : null}
          {status === "error" ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-start gap-3 rounded-2xl border border-rose-400/30 bg-rose-400/6 px-4 py-3 text-sm text-rose-200"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-400/20">
                <X className="h-3 w-3" strokeWidth={3} />
              </span>
              <div>
                <p className="font-medium">Couldn't send right now.</p>
                <p className="text-xs text-rose-300/80">
                  {errorMessage} Or email me directly at{" "}
                  <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-zinc-500">
              {WEB3FORMS_KEY
                ? "Sends straight to my inbox."
                : "Opens your mail app with the message pre-filled."}
            </p>
            <motion.button
              type="submit"
              data-cursor="send"
              whileHover={isSending ? undefined : { scale: 1.03 }}
              whileTap={isSending ? undefined : { scale: 0.97 }}
              disabled={isSending}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : status === "sent" ? (
                <>
                  <Check className="h-4 w-4" strokeWidth={3} />
                  Sent
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
