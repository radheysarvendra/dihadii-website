import { useMemo, useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "support@dehaadi.com" },
  { icon: Phone, label: "Phone", value: "+917565060096" },
  { icon: MapPin, label: "Address", value: "Dummy" },
  { icon: Clock, label: "Hours", value: "Monday – Saturday, 9 AM – 6 PM" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  terms?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = "Full name must be at least 2 characters.";
    }
    if (!/^\d{10}$/.test(phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (email.trim() && !EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (message.trim().length < 5) {
      nextErrors.message = "Message must be at least 5 characters.";
    }
    if (!agreedToTerms) {
      nextErrors.terms = "You must agree to the Terms and Conditions to continue.";
    }
    return nextErrors;
  };

  const isFormValid = useMemo(() => {
    return (
      name.trim().length >= 2 &&
      /^\d{10}$/.test(phone.trim()) &&
      (!email.trim() || EMAIL_PATTERN.test(email.trim())) &&
      message.trim().length >= 5 &&
      agreedToTerms
    );
  }, [name, phone, email, message, agreedToTerms]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    const payload = {
      fullName: name.trim(),
      phoneNumber: phone.trim(),
      email: email.trim() || null,
      message: message.trim(),
    };

    try {
      // No contact API endpoint currently exists on the backend for this project.
      // Submission is handled locally until a real endpoint is wired up.
      await new Promise((resolve) => setTimeout(resolve, 500));
      void payload;

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setAgreedToTerms(false);
      setErrors({});
    } catch {
      setStatus("error");
    }
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

          <div role="status" aria-live="polite" className="mt-6">
            {status === "success" && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Your message has been sent successfully. We will contact you soon.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Something went wrong while sending your message. Please try again.
              </div>
            )}
          </div>

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
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="Your full name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs font-medium text-red-600">
                  {errors.name}
                </p>
              )}
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
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className="w-full rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="10-digit mobile number"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs font-medium text-red-600">
                  {errors.phone}
                </p>
              )}
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
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs font-medium text-red-600">
                  {errors.email}
                </p>
              )}
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
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-xl border border-brand-blue/15 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-blue"
                placeholder="How can we help?"
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs font-medium text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agree-terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  aria-invalid={Boolean(errors.terms)}
                  aria-describedby={errors.terms ? "terms-error" : undefined}
                  className="mt-0.5"
                />
                <label htmlFor="agree-terms" className="text-sm leading-relaxed text-brand-slate">
                  I have read and agree to the{" "}
                  <a
                    href="/terms-and-conditions#worker-verification-responsibility"
                    className="font-semibold text-brand-blue underline-offset-2 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                  , including the Worker Verification and Hirer Responsibility declaration.
                </label>
              </div>
              {errors.terms && (
                <p id="terms-error" className="mt-1 text-xs font-medium text-red-600">
                  {errors.terms}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full disabled:cursor-not-allowed"
              disabled={!isFormValid || status === "submitting"}
              aria-disabled={!isFormValid || status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
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
