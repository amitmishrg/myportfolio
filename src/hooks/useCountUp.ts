import { useEffect, useRef, useState } from "react"

type Options = {
  duration?: number
  start?: number
  enabled?: boolean
}

export function useCountUp(target: number, options: Options = {}) {
  const { duration = 1400, start = 0, enabled = true } = options
  const [value, setValue] = useState(start)
  const frame = useRef<number>(0)
  const started = useRef(false)

  useEffect(() => {
    if (!enabled || started.current) return
    started.current = true
    const t0 = performance.now()

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(start + (target - start) * eased)
      if (p < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [duration, enabled, start, target])

  return Math.round(value)
}
