interface LogoImageProps {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
}

export function LogoImage({ variant = "color", className }: LogoImageProps) {
  const src = variant === "white" ? "/logo-white.svg" : "/logo.svg";

  return <img src={src} alt="Dihadii" width={140} height={40} className={className} />;
}
