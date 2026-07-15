/**
 * Central Android download config. Every CTA and QR code on the site should
 * read from here so there is a single source of truth for the store URL.
 *
 * androidUrl is intentionally empty until a real Play Store link exists —
 * do not hardcode a placeholder link here. Consumers must treat an empty
 * string as "not available yet" and show a labelled placeholder instead of
 * a fake/broken QR code or link.
 */
export const APP_DOWNLOAD = {
  androidUrl: "",
  platformLabel: "Available on Android",
} as const;
