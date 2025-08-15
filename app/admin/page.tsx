import { getSession } from "./auth"
import { redirect } from "next/navigation"
import AdminDashboard from "./components/admin-dashboard"

export default async function AdminPage() {
  const session = await getSession()
  if (!session) {
    redirect("/admin/login")
  }

  return <AdminDashboard />
}
