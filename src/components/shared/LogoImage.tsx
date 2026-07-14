"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoImageProps {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
}

export function LogoImage({
  variant = "color",
  className,
  priority = false,
}: LogoImageProps) {
  const pngSrc = variant === "white" ? "/logo-white.png" : "/logo.png";
  const svgFallback = variant === "white" ? "/logo-white.svg" : "/logo.svg";
  const [src, setSrc] = useState(pngSrc);

  return (
    <Image
      src={src}
      alt="Dihadii"
      width={140}
      height={40}
      className={className}
      priority={priority}
      onError={() => setSrc(svgFallback)}
    />
  );
}
