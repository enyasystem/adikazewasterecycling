import { NextResponse } from "next/server"
import { requireAuth } from "@/app/admin/auth"
import { getStats } from "@/lib/db"

export async function GET() {
  try {
    await requireAuth()

    const stats = await getStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error("Get stats error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
