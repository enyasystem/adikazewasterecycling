import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt =
  "Adikaz Electronic Recycling Company - Professional E-Waste Recycling Services in Guildford, Sydney NSW"

export const size = {
  width: 1200,
  height: 675,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
        position: "relative",
      }}
    >
      {/* Background pattern overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 25% 25%, rgba(13, 148, 136, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(252, 211, 77, 0.2) 0%, transparent 50%)",
        }}
      />

      {/* Content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo and recycling symbol */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "25px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M7 19H6.5a2.5 2.5 0 0 1 0-5H14" />
              <path d="m10 17 2 2-2 2" />
              <path d="M17 5H16.5a2.5 2.5 0 0 0 0 5H10" />
              <path d="m14 7-2-2 2-2" />
              <path d="M7 5a2.5 2.5 0 0 1 2.5 2.5V12" />
              <path d="m5 9 2 2 2-2" />
            </svg>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.1,
                background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Adikaz
            </h1>
            <p
              style={{
                fontSize: "24px",
                margin: 0,
                color: "#94a3b8",
                fontWeight: "500",
              }}
            >
              Electronic Recycling Company
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <p
            style={{
              fontSize: "28px",
              color: "#e2e8f0",
              margin: 0,
              fontWeight: "600",
            }}
          >
            Professional E-Waste Recycling Services
          </p>
        </div>

        {/* Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(13, 148, 136, 0.2)",
            padding: "16px 32px",
            borderRadius: "40px",
            border: "2px solid rgba(13, 148, 136, 0.3)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#14B8A6"
            strokeWidth="2"
            style={{ marginRight: "10px" }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span
            style={{
              fontSize: "20px",
              color: "#14B8A6",
              fontWeight: "600",
            }}
          >
            Guildford, Sydney NSW
          </span>
        </div>

        {/* Circuit decoration elements */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "50px",
            display: "flex",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
              opacity: 0.8,
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
              opacity: 0.6,
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50px",
            display: "flex",
            gap: "6px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
              opacity: 0.8,
            }}
          />
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
