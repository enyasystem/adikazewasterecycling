import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-this-in-production")

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

export async function verifyCredentials(username: string, password: string): Promise<boolean> {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export async function createSession(username: string): Promise<string> {
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET)

  return token
}

export async function verifySession(token: string): Promise<{ username: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return { username: payload.username as string }
  } catch (error) {
    return null
  }
}

export async function getSession(): Promise<{ username: string } | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin-token")?.value

  if (!token) {
    return null
  }

  return verifySession(token)
}

export async function requireAuth(): Promise<{ username: string }> {
  const session = await getSession()

  if (!session) {
    throw new Error("Unauthorized")
  }

  return session
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("admin-token")
}
