"use client";

import Image from "next/image";
import { useState } from "react";

type DoctorAvatarProps = {
  src: string;
  name: string;
  priority?: boolean;
  className?: string;
};

function getInitials(name: string): string {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function DoctorAvatar({ src, name, priority = false, className = "" }: DoctorAvatarProps) {
  const [broken, setBroken] = useState(false);
  const initials = getInitials(name);

  if (broken) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-[#0B5FA5] text-white ${className}`}
        aria-label={name}
        role="img"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "0.05em" }}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      className={`object-cover ${className}`}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 320px"
      onError={() => setBroken(true)}
    />
  );
}
