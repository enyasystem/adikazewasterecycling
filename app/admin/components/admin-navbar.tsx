"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminNavbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname?.startsWith(path) ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
  }

  return (
    <nav className="bg-gray-800">
      <div className="px-4 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/admin" className="text-white font-bold text-xl">
              Admin Dashboard
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/admin"
                className={`${isActive("/admin")} rounded-md px-3 py-2 text-sm font-medium`}
              >
                Dashboard
              </Link>
              <Link
                href="/admin/submissions"
                className={`${isActive("/admin/submissions")} rounded-md px-3 py-2 text-sm font-medium`}
              >
                Submissions
              </Link>
            </div>
          </div>
          <div>
            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}
