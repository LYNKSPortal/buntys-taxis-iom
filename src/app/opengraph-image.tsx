import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bunty's Taxis — Premier Taxi Service on the Isle of Man";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#29ABE2",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(41,171,226,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              color: "#29ABE2",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            BUNTY&apos;S TAXIS
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: 4,
            lineHeight: 1,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          PREMIER TAXI SERVICE
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: 10,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          ISLE OF MAN
        </div>

        {/* Phone */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(41,171,226,0.15)",
            border: "1px solid rgba(41,171,226,0.4)",
            borderRadius: 4,
            padding: "14px 28px",
          }}
        >
          <div
            style={{
              color: "#29ABE2",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            +44 7624 313151
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#29ABE2",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
