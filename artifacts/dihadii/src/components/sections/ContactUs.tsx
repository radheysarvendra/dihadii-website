import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "support@dehaadi.com" },
  { icon: Phone, label: "Phone", value: "+917565060096" },
  { icon: MapPin, label: "Address", value: "Dummy" },
  { icon: Clock, label: "Hours", value: "Monday – Saturday, 9 AM – 6 PM" },
];

export function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Full name is required.";
    if (!/^\d{10}$/.test(phone.trim())) nextErrors.phone = "Enter a valid 10-digit phone number.";
    if (!message.trim() || message.trim().length < 3) nextErrors.message = "Please enter a message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <SectionWrapper id="contact" className="bg-brand-bg">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            Have a question or need help? We are here for you.
          </p>

          {submitted && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              Thank you! We will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, "").slice(0, 10))}
                className="w-full rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="10-digit mobile number"
              />
              {errors.phone && <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                Email Address <span className="font-normal text-brand-slate">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-navy">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="How can we help?"
              />
              {errors.message && <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>}
            </div>

            <Button type="submit" variant="accent" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Info cards */}
        <div className="grid gap-4 self-start sm:grid-cols-2 lg:grid-cols-1">
          {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                <Icon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">
                  {label}
                </p>
                <p className="mt-0.5 font-semibold text-brand-navy">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
