export interface City {
  id: string;
  name: string;
  status: "Launching Soon" | "Coming Soon";
  img: string;
  imageAlt: string;
}

export const SERVICE_LOCATIONS: City[] = [
  {
    id: "gorakhpur",
    name: "Gorakhpur",
    img: "/cities/gorakhpur.png",
    imageAlt: "Gorakhpur service location",
    status: "Launching Soon",
  },
  {
    id: "lucknow",
    name: "Lucknow",
    img: "/cities/lucknow.png",
    imageAlt: "Lucknow service location",
    status: "Coming Soon",
  },
  {
    id: "varanasi",
    name: "Varanasi",
    img: "/cities/varanasi.png",
    imageAlt: "Varanasi service location",
    status: "Coming Soon",
  },
  {
    id: "allahabad",
    name: "Allahabad",
    img: "/cities/allahabad.png",
    imageAlt: "Allahabad service location",
    status: "Coming Soon",
  },
  {
    id: "kanpur",
    name: "Kanpur",
    img: "/cities/kanpur.png",
    imageAlt: "Kanpur service location",
    status: "Coming Soon",
  },
  {
    id: "ayodhya",
    name: "Ayodhya",
    img: "/cities/ayodhya.png",
    imageAlt: "Ayodhya service location",
    status: "Coming Soon",
  },
  {
    id: "rewa",
    name: "Rewa",
    img: "/cities/rewa.png",
    imageAlt: "Rewa service location",
    status: "Coming Soon",
  },
  {
    id: "bhopal",
    name: "Bhopal",
    img: "/cities/bhopal.png",
    imageAlt: "Bhopal service location",
    status: "Coming Soon",
  },
  {
    id: "indore",
    name: "Indore",
    img: "/cities/indore.png",
    imageAlt: "Indore service location",
    status: "Coming Soon",
  },
  {
    id: "delhi-ncr",
    name: "Delhi NCR",
    img: "/cities/delhi-ncr.png",
    imageAlt: "Delhi NCR service location",
    status: "Coming Soon",
  },
  {
    id: "agra",
    name: "Agra",
    // NOTE: no Agra image was provided in the uploaded asset set — reported to the user.
    img: "/cities/agra.png",
    imageAlt: "Agra service location",
    status: "Coming Soon",
  },
];
