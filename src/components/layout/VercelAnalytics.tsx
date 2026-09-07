import { useEffect } from "react"
import { Analytics, track } from "@vercel/analytics/react"

function useLinkClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("javascript:")) return

      const label =
        anchor.getAttribute("data-analytics") ??
        anchor.getAttribute("aria-label") ??
        anchor.textContent?.replace(/\s+/g, " ").trim().slice(0, 80) ??
        "link"

      track("link_click", { href, label })
    }

    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])
}

/** Vercel Web Analytics — page views + outbound / CTA link clicks. */
export function VercelAnalytics() {
  useLinkClickTracking()
  return <Analytics />
}
