import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogoImage } from "@/components/shared/LogoImage";
import { CATEGORIES } from "@/data/categories";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Workers", href: "#roles" },
  { label: "For Contractors", href: "#roles" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-md shadow-brand-navy/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20">
          <a href="/" className="relative z-10 flex items-center gap-2">
            <LogoImage className="h-9 w-9 md:h-10 md:w-10" priority />
            <span
              className={cn(
                "text-lg font-extrabold md:text-xl transition-colors duration-300",
                scrolled ? "text-brand-navy" : "text-white"
              )}
            >
              Dehaadi
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-blue",
                  scrolled ? "text-brand-navy/80" : "text-white"
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-1 rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-xl shadow-brand-navy/10"
                  >
                    {CATEGORIES.map((cat) => (
                      <a
                        key={cat.slug}
                        href={`/services/${cat.slug}`}
                        className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
                      >
                        <img
                          src={cat.img}
                          alt=""
                          className="h-8 w-8 rounded-md object-cover"
                          style={{ objectPosition: cat.imagePosition }}
                        />
                        {cat.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-blue",
                  scrolled ? "text-brand-navy/80" : "text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="accent" size="default" asChild>
              <a href="#final-cta">Download App</a>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "relative z-10 rounded-lg p-2 transition-colors duration-300 lg:hidden",
              scrolled ? "text-brand-navy" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-brand-navy/95 backdrop-blur-sm lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex min-h-full flex-col items-center justify-center gap-6 px-6 py-24"
            >
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-2xl font-semibold text-white transition-colors hover:text-brand-sky"
              >
                Services
                <ChevronDown className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid w-full grid-cols-2 gap-3 overflow-hidden"
                  >
                    {CATEGORIES.map((cat) => (
                      <a
                        key={cat.slug}
                        href={`/services/${cat.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg bg-white/10 px-3 py-2 text-center text-sm font-medium text-white/90"
                      >
                        {cat.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white transition-colors hover:text-brand-sky"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="accent" size="lg" asChild className="mt-4">
                <a href="#final-cta" onClick={() => setMobileOpen(false)}>
                  Download App
                </a>
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
