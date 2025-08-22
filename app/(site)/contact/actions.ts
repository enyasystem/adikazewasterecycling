"use server"

import { saveContactSubmission } from "@/lib/db"
import { z } from "zod"

// State shape returned by the server action. Use a union so callers (like useFormState)
// can narrow correctly depending on whether the response includes `fields` or `issues`.
export type ContactFormState =
  | { success: true; message: string; fields: Record<string, string> }
  | { success: false; message: string; issues: string[] }
  | { success: boolean; message: string; fields?: undefined; issues?: undefined }

const contactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  message: z.string(),
})

type Incoming = FormData | Record<string, any>

export async function submitContactForm(formData: Incoming) {
  try {
    // Debug: log incoming payload shape to help diagnose empty fields
    try {
      // Avoid circular structure issues
      const preview = typeof formData === "object" ? JSON.parse(JSON.stringify(formData)) : String(formData)
      console.debug("submitContactForm incoming payload preview:", preview)
    } catch (e) {
      console.debug("submitContactForm incoming payload (unserializable) - type:", typeof formData)
    }

    const normalize = (value: any) => {
      if (value === null || value === undefined) return ""
      if (Array.isArray(value)) return String(value[0] ?? "")
      if (typeof value === "object") {
        // common shapes: { value: 'x' } or { 0: 'x' }
        if ((value as any).value !== undefined) return String((value as any).value)
        if ((value as any)[0] !== undefined) return String((value as any)[0])
        // fallback to JSON
        try {
          return String(JSON.stringify(value))
        } catch {
          return ""
        }
      }
      return String(value)
    }

    const get = (key: string) => {
      // FormData from browser has .get
      if (formData && typeof (formData as any).get === "function") {
        const v = (formData as FormData).get(key)
        return v === null ? "" : String(v)
      }

      const obj = formData as Record<string, any>
      // Direct field
      if (obj && Object.prototype.hasOwnProperty.call(obj, key)) return normalize(obj[key])
      // Under fields
      if (obj && obj.fields && Object.prototype.hasOwnProperty.call(obj.fields, key)) return normalize(obj.fields[key])
      // Some clients may send {name: ['value']} or {name: { value: 'x' }} - attempt to find key by loose search
      if (obj) {
        for (const k of Object.keys(obj)) {
          if (k.toLowerCase() === key.toLowerCase()) return normalize(obj[k])
        }
      }

      return ""
    }

    const data = {
      name: get("name"),
      email: get("email"),
      phone: get("phone") || undefined,
      message: get("message"),
    }
    console.log("[submitContactForm] Received data:", data)

    const validatedData = contactSchema.parse(data)

    await saveContactSubmission(validatedData)

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      fields: validatedData as any,
    }
  } catch (error) {
    console.error("Contact form submission error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
        issues: error.errors.map((e) => e.message),
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
