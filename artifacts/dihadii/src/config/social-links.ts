/**
 * Central social media configuration.
 * Update a URL here to make its icon active across the site (footer, etc.).
 * Leave a URL empty to keep the icon hidden/disabled — never wire up href="#".
 */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dihadiiofficial?igsh=NTQwNDVhcDRsNjdv",
  youtube: "",
  facebook: "",
  linkedin: "",
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
