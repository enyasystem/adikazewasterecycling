import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(135deg, #0D9488 0%, #14B8A6 50%, #06B6D4 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "40px",
        position: "relative",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          borderRadius: "40px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main recycling symbol */}
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 19H6.5a2.5 2.5 0 0 1 0-5H14" />
          <path d="m10 17 2 2-2 2" />
          <path d="M17 5H16.5a2.5 2.5 0 0 0 0 5H10" />
          <path d="m14 7-2-2 2-2" />
          <path d="M7 5a2.5 2.5 0 0 1 2.5 2.5V12" />
          <path d="m5 9 2 2 2-2" />
        </svg>

        {/* Circuit elements */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            gap: "8px",
            top: "20px",
            right: "20px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            display: "flex",
            gap: "6px",
            bottom: "25px",
            left: "25px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "4px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: "4px",
              height: "4px",
              backgroundColor: "#FCD34D",
              borderRadius: "50%",
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
