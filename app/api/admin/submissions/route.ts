import { NextResponse } from "next/server"
import { requireAuth } from "@/app/admin/auth"
import { getSubmissions } from "@/lib/db"

export async function GET() {
  try {
    await requireAuth()

    const submissions = await getSubmissions()
    return NextResponse.json(submissions)
  } catch (error) {
    console.error("Get submissions error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
