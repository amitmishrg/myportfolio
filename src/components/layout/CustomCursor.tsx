import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

/**
 * A two-part chromatic cursor:
 *  - a 6px dot that tracks the mouse 1:1 (pixel-perfect pointer)
 *  - a 36px ring that trails with spring physics and expands + shows a label
 *    when hovering an interactive element
 *
 * Hover detection works in two ways:
 *  1. Automatic: any <a>, <button>, [role="button"], [data-cursor] element
 *     triggers the "hovering" state.
 *  2. Contextual label: elements can declare
 *       data-cursor="link" | "view" | "send" | "drag" | "read"
 *     or an explicit `data-cursor-label="YOUR TEXT"` to customise the readout.
 *
 * The component:
 *  - is completely hidden on coarse pointers (touch) and on reduced-motion users
 *  - uses `mix-blend-mode: difference` so the ring reads against both dark and
 *    light sections without extra configuration.
 */

type CursorState = {
  active: boolean
  label: string | null
}

const LABEL_MAP: Record<string, string> = {
  link: "OPEN",
  view: "VIEW CASE",
  send: "SEND",
  drag: "DRAG",
  read: "READ",
  download: "DOWNLOAD",
  mail: "EMAIL",
}

function resolveLabel(el: Element | null): string | null {
  if (!el) return null
  const explicit = (el as HTMLElement).dataset.cursorLabel
  if (explicit) return explicit
  const kind = (el as HTMLElement).dataset.cursor
  if (kind && LABEL_MAP[kind]) return LABEL_MAP[kind]
  return null
}

function findInteractive(target: EventTarget | null): Element | null {
  if (!(target instanceof Element)) return null
  return target.closest('a, button, [role="button"], [data-cursor], input, textarea, select, label')
}

export function CustomCursor() {
  // Determine support lazily on first render (avoids setState-in-effect).
  // We only render the cursor on fine pointers without reduced-motion.
  const [supported] = useState(() => {
    if (typeof window === "undefined") return false
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    return fine && !reduced
  })
  const [state, setState] = useState<CursorState>({ active: false, label: null })

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Dot: no smoothing — it's meant to be the precise pointer.
  // Ring: spring-eased for a satisfying trailing feel.
  const ringX = useSpring(x, { stiffness: 420, damping: 40, mass: 0.35 })
  const ringY = useSpring(y, { stiffness: 420, damping: 40, mass: 0.35 })

  useEffect(() => {
    if (!supported) return

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = findInteractive(e.target)
      const label = resolveLabel(el)
      // Only update state when it actually changes — avoids re-render thrash.
      setState((prev) => {
        const active = !!el
        if (prev.active === active && prev.label === label) return prev
        return { active, label }
      })
    }

    const handleLeave = () => setState({ active: false, label: null })

    window.addEventListener("pointermove", handleMove, { passive: true })
    window.addEventListener("pointerdown", handleMove, { passive: true })
    document.addEventListener("mouseleave", handleLeave)

    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerdown", handleMove)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [supported, x, y])

  // Hide the native cursor when our custom one is active so we don't get doubles.
  useEffect(() => {
    if (!supported) return
    const prev = document.documentElement.style.cursor
    document.documentElement.style.cursor = "none"
    return () => {
      document.documentElement.style.cursor = prev
    }
  }, [supported])

  // Ring sizing: grows when hovering interactive elements, grows further
  // when there's a label to make room for the text pill.
  const ringSize = useMemo(() => {
    if (!state.active) return 36
    if (state.label) return 88
    return 64
  }, [state])

  // Small dot ignores hover; just tracks.
  const dotTransform = useTransform([x, y], ([cx, cy]) => {
    return `translate3d(${(cx as number) - 3}px, ${(cy as number) - 3}px, 0)`
  })
  const ringTransform = useTransform([ringX, ringY], ([cx, cy]) => {
    return `translate3d(${(cx as number) - ringSize / 2}px, ${(cy as number) - ringSize / 2}px, 0)`
  })

  if (!supported) return null

  return (
    <>
      {/* Global rule so every interactive element hides its native caret too. */}
      <style>{`
        a, button, [role="button"], [data-cursor], input, textarea, select, label {
          cursor: none;
        }
      `}</style>

      {/* Ring — blended, trails, expands. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-60 rounded-full border border-white mix-blend-difference"
        style={{
          width: ringSize,
          height: ringSize,
          transform: ringTransform,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderWidth: state.active ? 1 : 1,
          backgroundColor: state.active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.4 }}
      >
        {state.label ? (
          <motion.span
            key={state.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="font-display absolute inset-0 flex items-center justify-center text-[10px] font-semibold tracking-[0.18em] whitespace-nowrap text-white uppercase"
            style={{ letterSpacing: "0.18em" }}
          >
            {state.label}
          </motion.span>
        ) : null}
      </motion.div>

      {/* Tiny precise dot — no spring. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-61 h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ transform: dotTransform }}
        animate={{ opacity: state.active ? 0 : 1, scale: state.active ? 0 : 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </>
  )
}
