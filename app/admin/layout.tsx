import type React from "react"
import AdminNavbar from "./components/admin-navbar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  )
}
