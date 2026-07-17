/**
 * Image configuration for the four user-category cards.
 * Point each key at the actual uploaded image asset.
 */
export const CATEGORY_IMAGES = {
  labourImage: "/categories/labour.png",
  needLabourImage: "/categories/need-labour.png",
  contractorImage: "/categories/contractor.png",
  needContractorImage: "/categories/need-contractor.png",
} as const;

export type ImageFit = "cover" | "contain";

export interface RoleCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** object-fit for the card image — keep "cover" unless a card's source photo needs "contain" to avoid cropping. */
  imageFit: ImageFit;
  /** object-position for the card image — tuned per photo so faces/logos aren't cropped. */
  imagePosition: string;
  actionLabel: string;
  actionUrl: string;
}

/**
 * Source photos are portrait (1122x1402, ~4:5). The image wrapper uses a
 * matching 4/5 aspect-ratio so cropping is minimal; imagePosition below only
 * nudges the focal point to keep each face/logo fully in frame.
 */
export const USER_CATEGORY_CARDS: RoleCategory[] = [
  {
    id: "labour",
    title: "I am a Labour",
    description:
      "Find daily-wage and skilled work near you. Showcase your skills and connect with suitable work opportunities.",
    image: CATEGORY_IMAGES.labourImage,
    imageAlt: "Dihadii labourer in branded polo, arms crossed, at a construction site",
    imageFit: "cover",
    imagePosition: "center 12%",
    actionLabel: "Get Started",
    actionUrl: "#final-cta",
  },
  {
    id: "need-labour",
    title: "I need a Labour",
    description:
      "Find workers for construction, farming, factory work, and more — connect directly and discuss rates.",
    image: CATEGORY_IMAGES.needLabourImage,
    imageAlt: "Person checking their phone at a construction site to hire a labourer",
    imageFit: "cover",
    imagePosition: "center 14%",
    actionLabel: "Get Started",
    actionUrl: "#final-cta",
  },
  {
    id: "contractor",
    title: "I am a Contractor",
    description:
      "Manage your projects, build your team, and connect with clients directly on the platform.",
    image: CATEGORY_IMAGES.contractorImage,
    imageAlt: "Contractor wearing a Dihadii branded helmet at a construction site",
    imageFit: "cover",
    imagePosition: "center 8%",
    actionLabel: "Get Started",
    actionUrl: "#final-cta",
  },
  {
    id: "need-contractor",
    title: "I need a Contractor",
    description:
      "Find contractors for your project and connect directly to discuss scope and pricing.",
    image: CATEGORY_IMAGES.needContractorImage,
    imageAlt: "Person on a phone call in front of a modern house to hire a contractor",
    imageFit: "cover",
    imagePosition: "center 14%",
    actionLabel: "Get Started",
    actionUrl: "#final-cta",
  },
];
