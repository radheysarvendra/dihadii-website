interface LogoImageProps {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
}

export function LogoImage({ className }: LogoImageProps) {
  return (
    <img
      src="/logo.jpg"
      alt="Dihadii"
      width={40}
      height={40}
      className={`rounded-lg object-cover ${className ?? ""}`}
    />
  );
}
