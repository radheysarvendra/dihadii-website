export interface ServiceCategory {
  slug: string;
  name: string;
  hindi: string;
  img: string;
  description: string;
}

export const CATEGORIES: ServiceCategory[] = [
  {
    slug: "mason",
    name: "Mason",
    hindi: "राजमिस्त्री",
    img: "/categories/mason.png",
    description: "Skilled masons for construction, brickwork, plastering, and finishing work.",
  },
  {
    slug: "carpenter",
    name: "Carpenter",
    hindi: "बढ़ई",
    img: "/categories/carpenter.png",
    description: "Furniture making, wood fitting, repairs, and custom carpentry work.",
  },
  {
    slug: "painter",
    name: "Painter",
    hindi: "पेंटर",
    img: "/categories/painter.png",
    description: "Interior and exterior painting for homes, offices, and commercial spaces.",
  },
  {
    slug: "electrician",
    name: "Electrician",
    hindi: "इलेक्ट्रिशियन",
    img: "/categories/electrician.png",
    description: "Wiring, repairs, installations, and electrical maintenance work.",
  },
  {
    slug: "plumber",
    name: "Plumber",
    hindi: "प्लंबर",
    img: "/categories/plumber.png",
    description: "Pipe fitting, leak repairs, bathroom fittings, and plumbing installations.",
  },
  {
    slug: "housemaid",
    name: "Housemaid",
    hindi: "घरेलू सहायिका",
    img: "/categories/housemaid.png",
    description: "Trusted household help for cleaning, cooking, and daily home support.",
  },
  {
    slug: "cook-helper",
    name: "Cook/Helper",
    hindi: "रसोइया",
    img: "/categories/cook-helper.png",
    description: "Home cooks and kitchen helpers for daily meals and events.",
  },
  {
    slug: "cleaner",
    name: "Cleaner",
    hindi: "सफाई कर्मी",
    img: "/categories/cleaner.png",
    description: "Deep cleaning, housekeeping, and sanitation services for homes and offices.",
  },
  {
    slug: "gardener",
    name: "Gardener",
    hindi: "माली",
    img: "/categories/gardener.png",
    description: "Garden maintenance, landscaping, and plant care services.",
  },
  {
    slug: "caretaker",
    name: "Caretaker",
    hindi: "देखभालकर्ता",
    img: "/categories/caretaker.png",
    description: "Home and property caretakers for daily upkeep and housekeeping support.",
  },
  {
    slug: "delivery-boy",
    name: "Delivery Boy",
    hindi: "डिलीवरी बॉय",
    img: "/categories/delivery-boy.png",
    description: "Reliable delivery and logistics support for shops and businesses.",
  },
  {
    slug: "security-guard",
    name: "Security Guard",
    hindi: "सुरक्षा गार्ड",
    img: "/categories/security-guard.png",
    description: "Verified security personnel for homes, offices, and events.",
  },
  {
    slug: "farm-labourer",
    name: "Farm Labourer",
    hindi: "खेत मजदूर",
    img: "/categories/farm-labourer.png",
    description: "Farm labour for harvesting, irrigation, and seasonal agricultural work.",
  },
  {
    slug: "shop-helper",
    name: "Shop Helper",
    hindi: "दुकान सहायक",
    img: "/categories/shop-helper.png",
    description: "Shop assistants, loaders, and retail support staff.",
  },
  {
    slug: "tailor",
    name: "Tailor",
    hindi: "दर्जी",
    img: "/categories/tailor.png",
    description: "Custom stitching, alterations, and tailoring services.",
  },
  {
    slug: "hotel-dhaba",
    name: "Hotel/Dhaba",
    hindi: "होटल मजदूर",
    img: "/categories/hotel-dhaba.png",
    description: "Kitchen staff, waiters, and helpers for hotels, dhabas, and restaurants.",
  },
];
