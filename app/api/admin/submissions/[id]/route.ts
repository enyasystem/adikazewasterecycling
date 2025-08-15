import { type NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/app/admin/auth"
import { deleteSubmission } from "@/lib/db"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth()

    await deleteSubmission(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Delete submission error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
