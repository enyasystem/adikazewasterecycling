import type React from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen container mx-auto p-6">{children}</div>
}
