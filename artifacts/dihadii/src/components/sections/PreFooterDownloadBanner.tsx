import { motion } from "framer-motion";
import { HardHat, Wrench, MapPin, Briefcase, Building2 } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { APP_DOWNLOAD } from "@/config/app-download";
import { LogoImage } from "@/components/shared/LogoImage";
import qrCode from "@/assets/dehaadi-app-download-qr.png";

/** Small floating decorative badge, matching the reference banner's scattered icon treatment. */
function FloatingBadge({
  icon: Icon,
  className,
}: {
  icon: typeof HardHat;
  className: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute flex items-center justify-center rounded-2xl bg-white/10 text-white/70 shadow-lg backdrop-blur-sm ${className}`}
      aria-hidden
    >
      <Icon className="h-1/2 w-1/2" />
    </div>
  );
}

export function PreFooterDownloadBanner() {
  return (
    <section id="final-cta" className="bg-white px-4 pb-20 pt-4 sm:px-6 lg:px-8 md:pb-28 scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16"
      >
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left — brand + copy */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2">
              <LogoImage className="h-7 w-7" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Dehaadi
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get the Dehaadi App Now!
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70 lg:mx-0">
              Find work, hire labour, and connect with contractors through the
              Dehaadi Android app.
            </p>
            <p className="mt-6 text-sm text-white/50">{APP_DOWNLOAD.platformLabel}</p>
          </div>

          {/* Right — QR panel with scattered decorative icons, mirroring the reference composition */}
          <div className="relative flex items-center justify-center py-6">
            <FloatingBadge
              icon={HardHat}
              className="left-2 top-0 h-14 w-14 -rotate-6 sm:left-6 sm:h-16 sm:w-16"
            />
            <FloatingBadge
              icon={Wrench}
              className="right-4 top-2 h-12 w-12 rotate-12 sm:right-10 sm:h-14 sm:w-14"
            />
            <FloatingBadge
              icon={Briefcase}
              className="bottom-2 left-4 h-12 w-12 rotate-6 sm:left-10 sm:h-14 sm:w-14"
            />
            <FloatingBadge
              icon={Building2}
              className="bottom-0 right-2 h-14 w-14 -rotate-6 sm:right-6 sm:h-16 sm:w-16"
            />
            <FloatingBadge
              icon={MapPin}
              className="left-1/2 top-[-0.5rem] hidden h-11 w-11 -translate-x-1/2 md:flex"
            />

            <div className="relative flex flex-col items-center gap-3 rounded-3xl bg-white p-5 shadow-2xl shadow-black/30">
              <img
                src={qrCode}
                alt="QR code to download the Dehaadi Android app"
                className="h-36 w-36 object-contain sm:h-40 sm:w-40"
              />
              <p className="text-sm font-bold text-brand-orange">Scan to Download</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
