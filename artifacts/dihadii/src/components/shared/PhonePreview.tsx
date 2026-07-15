interface PhonePreviewProps {
  src: string;
  alt: string;
  className?: string;
}

/** Reusable phone-bezel frame around a real app screenshot. */
export function PhonePreview({ src, alt, className }: PhonePreviewProps) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[240px] overflow-hidden rounded-[2.25rem] border-[6px] border-brand-navy bg-brand-navy shadow-2xl shadow-brand-navy/30 ${className ?? ""}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-[1.75rem] object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}
