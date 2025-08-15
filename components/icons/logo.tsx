import { Recycle } from "lucide-react"

export function Logo({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Recycle className="text-teal-600" size={size} strokeWidth={2.5} />
      <span className="text-xl font-semibold text-slate-800 tracking-tight">Adikaz Recycling</span>
    </div>
  )
}

export function FaviconLogo({ size = 32 }: { size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        position: "relative",
      }}
    >
      {/* Recycling symbol with electronic elements */}
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main recycling arrows */}
        <path
          d="M16 4L20 8L16 12M16 4L12 8L16 12M16 4V12"
          stroke="#0D9488"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8 16L4 12L8 8M8 16L4 20L8 24M8 16H16"
          stroke="#0D9488"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M24 16L28 12L24 8M24 16L28 20L24 24M24 16H16"
          stroke="#0D9488"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Electronic circuit elements */}
        <circle cx="16" cy="16" r="3" fill="#F59E0B" />
        <circle cx="10" cy="10" r="1.5" fill="#0D9488" />
        <circle cx="22" cy="10" r="1.5" fill="#0D9488" />
        <circle cx="10" cy="22" r="1.5" fill="#0D9488" />
        <circle cx="22" cy="22" r="1.5" fill="#0D9488" />

        {/* Connecting lines */}
        <path
          d="M13 16L10 10M19 16L22 10M13 16L10 22M19 16L22 22"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
