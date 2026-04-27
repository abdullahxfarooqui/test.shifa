import { ImageResponse } from "next/og";

import { getSpecialtyTemplateData } from "@/lib/specialty-page-config";

export const alt = "Shifa International Hospitals specialty page";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function hashToHue(input: string) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) % 360;
}

type OgImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OgImage({ params }: OgImageProps) {
  const { slug } = await params;
  const specialty = getSpecialtyTemplateData(slug);
  const specialtyName = specialty?.name ?? "Speciality";

  const hue = hashToHue(slug);
  const hue2 = (hue + 35) % 360;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, hsl(${hue}, 68%, 30%), hsl(${hue2}, 64%, 38%))`,
          color: "white",
          fontFamily: "Arial, sans-serif",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "72%",
            gap: "18px",
          }}
        >
          <div style={{ fontSize: 30, opacity: 0.92 }}>Shifa International Hospitals Islamabad</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.06 }}>{specialtyName}</div>
          <div style={{ fontSize: 30, opacity: 0.88 }}>Speciality Services</div>
        </div>
        <div
          style={{
            display: "flex",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 68,
            fontWeight: 700,
          }}
        >
          +
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
