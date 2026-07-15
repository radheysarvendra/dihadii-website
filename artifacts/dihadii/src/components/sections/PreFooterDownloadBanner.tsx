import { motion } from "framer-motion";
import { HardHat, Wrench, MapPin, Briefcase, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhonePreview } from "@/components/shared/PhonePreview";
import { DownloadQrCode } from "@/components/shared/DownloadQrCode";
import { fadeInUp } from "@/lib/animations";
import { APP_DOWNLOAD } from "@/config/app-download";
import { AUDIENCE_PREVIEW } from "@/data/app-features";

export function PreFooterDownloadBanner() {
  const preview = AUDIENCE_PREVIEW.labour;

  return (
    <section className="bg-white px-4 pb-20 pt-4 sm:px-6 lg:px-8 md:pb-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16"
      >
        {/* Decorative background icons */}
        <HardHat className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 text-white/5 sm:h-36 sm:w-36" aria-hidden />
        <Wrench className="pointer-events-none absolute right-8 top-10 h-14 w-14 rotate-12 text-white/5" aria-hidden />
        <Building2 className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 text-white/5 sm:h-40 sm:w-40" aria-hidden />
        <MapPin className="pointer-events-none absolute bottom-10 left-10 h-10 w-10 text-white/5" aria-hidden />
        <Briefcase className="pointer-events-none absolute left-1/2 top-6 hidden h-10 w-10 text-white/5 md:block" aria-hidden />

        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">
              Dehaadi for Android
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Find Work. Hire Help. Get Started with Dehaadi.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70 lg:mx-0">
              Download the Dehaadi Android app to explore work opportunities, submit labour
              requirements, and connect with workers or contractors in your area.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button variant="accent" size="lg" asChild>
                {APP_DOWNLOAD.androidUrl ? (
                  <a href={APP_DOWNLOAD.androidUrl}>Download for Android</a>
                ) : (
                  <a href="#final-cta">Download for Android</a>
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/25 bg-transparent text-white hover:border-white/50 hover:bg-white/10"
              >
                <a href="#prefooter-qr">Scan to Download</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/50">{APP_DOWNLOAD.platformLabel}</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:justify-end">
            <PhonePreview src={preview.src} alt={preview.alt} className="max-w-[200px] sm:max-w-[220px]" />
            <div id="prefooter-qr" className="scroll-mt-24">
              <DownloadQrCode url={APP_DOWNLOAD.androidUrl} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
