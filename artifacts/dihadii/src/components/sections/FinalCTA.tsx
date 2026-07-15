import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section id="final-cta" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-extrabold text-brand-navy sm:text-4xl md:text-5xl">
              Get the Dehaadi App
            </h2>
            <p className="mt-2 text-lg font-medium text-brand-blue/70">
              ऐप डाउनलोड करें
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-brand-slate">
              Right Worker, Right Price — download the app and start connecting
              with verified workers and contractors today.
            </p>

            <div className="mt-8">
              <a
                href="#final-cta"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-blue px-7 py-4 text-white shadow-[0_10px_40px_-8px_rgba(11,123,239,0.6)] transition-transform hover:scale-[1.02]"
              >
                <span className="flex items-center text-xl leading-none" aria-hidden>
                  ▶️
                </span>
                <span className="text-base font-bold">Download App</span>
              </a>
              <p className="mt-3 text-sm text-brand-slate">Available on Android</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            {/* APP IMAGE GOES HERE */}
            <div className="flex h-72 w-72 items-center justify-center rounded-3xl border-2 border-dashed border-brand-blue/20 bg-brand-bg text-sm text-brand-slate sm:h-80 sm:w-80">
              {/* APP IMAGE GOES HERE */}
              App Image
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
