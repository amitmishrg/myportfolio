import { cn } from "../../lib/cn"

type Props = {
  children: React.ReactNode
  active?: boolean
  className?: string
  onClick?: () => void
}

export function Tag({ children, active, className, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-[#8b5cf6]/60 bg-[#8b5cf6]/20 text-white"
          : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/25",
        className,
      )}
    >
      {children}
    </button>
  )
}
