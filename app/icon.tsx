import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Recycling arrows */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
            width: "4px",
            height: "4px",
            backgroundColor: "#FCD34D",
            borderRadius: "50%",
            top: "2px",
            right: "2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "3px",
            height: "3px",
            backgroundColor: "#FCD34D",
            borderRadius: "50%",
            bottom: "3px",
            left: "3px",
          }}
        />
      </div>
    </div>,
    {
      ...size,
    },
  )
}
