import { useEffect, useState } from "react";
import { QrCode } from "lucide-react";
import QRCode from "qrcode";

interface DownloadQrCodeProps {
  url: string;
  className?: string;
}

/**
 * Renders a real QR code pointing at `url`. If `url` is empty (Play Store
 * link not added yet), shows a clearly-labelled placeholder instead of a
 * fake/non-functional code.
 */
export function DownloadQrCode({ url, className }: DownloadQrCodeProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      setDataUrl(null);
      return;
    }
    let cancelled = false;
    QRCode.toDataURL(url, { margin: 1, width: 240, color: { dark: "#0b1730", light: "#ffffff" } })
      .then((generated) => {
        if (!cancelled) setDataUrl(generated);
      })
      .catch(() => {
        if (!cancelled) setDataUrl(null);
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (!url || !dataUrl) {
    return (
      <div
        className={`flex h-32 w-32 flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-white/25 bg-white/5 p-3 text-center sm:h-36 sm:w-36 ${className ?? ""}`}
        role="img"
        aria-label="QR code placeholder: will be available after the Play Store link is added"
      >
        <QrCode className="h-6 w-6 text-white/40" aria-hidden />
        <p className="text-[10px] leading-tight text-white/50">
          QR code available once the Play Store link is added
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-white p-2.5 shadow-lg sm:p-3 ${className ?? ""}`}>
      <img
        src={dataUrl}
        alt="Scan to download the Dihadii app."
        className="h-28 w-28 sm:h-32 sm:w-32"
      />
    </div>
  );
}
