import { neon } from "@neondatabase/serverless"

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  created_at: string
  is_read: boolean
}

export interface Stats {
  totalSubmissions: number
  unreadSubmissions: number
  todaySubmissions: number
}

// Mock data for development
const mockSubmissions: ContactSubmission[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+44 20 1234 5678",
    message: "I need help with recycling old computers from my office.",
    created_at: new Date().toISOString(),
    is_read: false,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    message: "What are your rates for mobile device recycling?",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    is_read: true,
  },
]

let sql: any = null

try {
  if (process.env.DATABASE_URL) {
    sql = neon(process.env.DATABASE_URL)
  }
} catch (error) {
  console.warn("Database connection failed, using mock data:", error)
}

export async function initializeDatabase() {
  if (!sql) {
    console.log("Using mock database - no DATABASE_URL configured")
    return
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_read BOOLEAN DEFAULT FALSE
      )
    `
    console.log("Database initialized successfully")
  } catch (error) {
    console.error("Failed to initialize database:", error)
  }
}

export async function saveContactSubmission(data: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  if (!sql) {
    // Mock save for development
    const newSubmission: ContactSubmission = {
      id: String(mockSubmissions.length + 1),
      ...data,
      created_at: new Date().toISOString(),
      is_read: false,
    }
    mockSubmissions.unshift(newSubmission)
    return newSubmission
  }

  try {
    const result = await sql`
      INSERT INTO contact_submissions (name, email, phone, message)
      VALUES (${data.name}, ${data.email}, ${data.phone || null}, ${data.message})
      RETURNING *
    `
    return result[0]
  } catch (error) {
    console.error("Failed to save contact submission:", error)
    throw error
  }
}

export async function getSubmissions(): Promise<ContactSubmission[]> {
  if (!sql) {
    return mockSubmissions
  }

  try {
    const result = await sql`
      SELECT * FROM contact_submissions 
      ORDER BY created_at DESC
    `
    return result
  } catch (error) {
    console.error("Failed to get submissions:", error)
    return mockSubmissions
  }
}

export async function getStats(): Promise<Stats> {
  if (!sql) {
    const now = new Date()
    return {
      totalSubmissions: mockSubmissions.length,
      unreadSubmissions: mockSubmissions.filter((s) => !s.is_read).length,
      thisMonthSubmissions: mockSubmissions.filter((s) => {
        const d = new Date(s.created_at)
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      }).length,
    }
  }

  try {
    const totalResult = await sql`SELECT COUNT(*) as count FROM contact_submissions`
    const unreadResult = await sql`SELECT COUNT(*) as count FROM contact_submissions WHERE is_read = FALSE`
    const monthResult = await sql`
      SELECT COUNT(*) as count FROM contact_submissions
      WHERE EXTRACT(MONTH FROM created_at) = EXTRACT(MONTH FROM CURRENT_DATE)
      AND EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM CURRENT_DATE)
    `

    return {
      totalSubmissions: Number.parseInt(totalResult[0].count),
      unreadSubmissions: Number.parseInt(unreadResult[0].count),
      thisMonthSubmissions: Number.parseInt(monthResult[0].count),
    }
  } catch (error) {
    console.error("Failed to get stats:", error)
    return { totalSubmissions: 0, unreadSubmissions: 0, thisMonthSubmissions: 0 }
  }
}

export async function markAsRead(id: string): Promise<void> {
  if (!sql) {
    const submission = mockSubmissions.find((s) => s.id === id)
    if (submission) {
      submission.is_read = true
    }
    return
  }

  try {
    await sql`
      UPDATE contact_submissions 
      SET is_read = TRUE 
      WHERE id = ${id}
    `
  } catch (error) {
    console.error("Failed to mark as read:", error)
    throw error
  }
}

export async function deleteSubmission(id: string): Promise<void> {
  if (!sql) {
    const index = mockSubmissions.findIndex((s) => s.id === id)
    if (index > -1) {
      mockSubmissions.splice(index, 1)
    }
    return
  }

  try {
    await sql`
      DELETE FROM contact_submissions 
      WHERE id = ${id}
    `
  } catch (error) {
    console.error("Failed to delete submission:", error)
    throw error
  }
}
