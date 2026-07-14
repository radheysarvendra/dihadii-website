import { Mail, Share2, Globe, MessageCircle, Rss } from "lucide-react";
import { LogoImage } from "@/components/shared/LogoImage";

const companyLinks = [
  { label: "About", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "Careers", href: "#" },
];

const serviceLinks = [
  { label: "Construction & Building", href: "#services" },
  { label: "Agriculture & Farming", href: "#services" },
  { label: "Factory & Industrial", href: "#services" },
  { label: "Transport & Delivery", href: "#services" },
  { label: "Domestic & Household", href: "#services" },
  { label: "Market & Shop Work", href: "#services" },
];

const forUsersLinks = [
  { label: "For Workers", href: "#roles" },
  { label: "For Contractors", href: "#roles" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Download App", href: "#final-cta" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: Rss, href: "#", label: "Twitter" },
  { icon: MessageCircle, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <LogoImage variant="white" className="h-9 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Right Worker &bull; Right Price &bull; Right Job
            </p>
            <p className="mt-1 text-sm text-white/40">Kaam Pe Chalo</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              For You
            </h4>
            <ul className="space-y-2.5">
              {forUsersLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:support@dihadii.com"
                className="transition-colors hover:text-white"
              >
                support@dihadii.com
              </a>
            </div>
          </div>
        </div>

        {/* Social + bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40">
            &copy; 2026 Dihadii Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
