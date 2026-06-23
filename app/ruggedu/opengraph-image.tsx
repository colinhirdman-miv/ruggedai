import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "RuggedU — a three-week live workshop where trades businesses build an AI co-pilot that knows their business. Tuesdays June 30, July 7 & July 21, 2026.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  const [barlow600, barlow800] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/barlow-condensed-600.ttf")),
    readFile(join(process.cwd(), "assets/fonts/barlow-condensed-800.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          color: "#FFFFFF",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "Barlow Condensed",
        }}
      >
        {/* Brand bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 18,
            backgroundColor: "#C41E1E",
            display: "flex",
          }}
        />

        {/* Top block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: 10,
              color: "#C41E1E",
            }}
          >
            THE WORKSHOP
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 168,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#C41E1E" }}>Rugged</span>
            <span style={{ color: "#FFFFFF" }}>U</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 48,
              fontWeight: 600,
              color: "#FFFFFF",
              maxWidth: 940,
              lineHeight: 1.12,
            }}
          >
            You leave with an AI co-pilot that knows your business.
          </div>
        </div>

        {/* Bottom block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 600,
              color: "#D1D1D1",
            }}
          >
            {"Tuesdays · June 30, July 7 & July 21 · 10:30am–Noon CT"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: 22,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span
                style={{ fontSize: 68, fontWeight: 800, color: "#C41E1E" }}
              >
                $497
              </span>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  color: "#6B7280",
                  marginLeft: 18,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                3-Week Live Workshop
              </span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 600,
                color: "#FFFFFF",
                letterSpacing: 1,
              }}
            >
              ruggedai.ai/ruggedu
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Barlow Condensed",
          data: barlow600,
          style: "normal",
          weight: 600,
        },
        {
          name: "Barlow Condensed",
          data: barlow800,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
