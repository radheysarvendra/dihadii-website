import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dihadii — Right Worker, Right Price | Kaam Pe Chalo",
  description:
    "Connect with verified labour, mistri, and contractors at fair, transparent daily rates. No middlemen, no hidden fees — just the right skilled worker for your job.",
  keywords: [
    "Dihadii",
    "labour",
    "mistri",
    "contractor",
    "daily wage",
    "skilled workers",
    "Haryana",
    "Gurugram",
    "Kaam Pe Chalo",
  ],
  openGraph: {
    title: "Dihadii — Right Worker, Right Price",
    description:
      "Verified labour, mistri & contractors at transparent daily rates. Kaam Pe Chalo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-brand-bg text-brand-navy">{children}</body>
    </html>
  );
}
