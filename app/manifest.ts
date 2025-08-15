import type { MetadataRoute } from "next"
import { COMPANY_NAME } from "@/lib/constants"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: "Adikaz Recycling",
    description:
      "Professional e-waste recycling services in Sydney. Free collection, secure data destruction, and environmentally responsible disposal.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0D9488", // teal-600
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
