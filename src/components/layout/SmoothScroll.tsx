import Lenis from "lenis"
import { useEffect } from "react"

import "lenis/dist/lenis.css"

type Props = {
  children: React.ReactNode
}

export function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2,
      // Handle #hash anchor clicks with a header-height offset so section
      // headings aren't swallowed by the sticky pill nav.
      anchors: {
        offset: 120,
        duration: 1.2,
      },
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return children
}
