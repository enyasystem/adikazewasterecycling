import { type NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/app/admin/auth"
import { markAsRead } from "@/lib/db"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth()

    await markAsRead(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Mark as read error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
