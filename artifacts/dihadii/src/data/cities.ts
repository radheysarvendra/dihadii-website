export interface City {
  name: string;
  areas: string;
  status: "live" | "soon" | "coming";
  img: string;
}

export const CITIES: City[] = [
  { name: "Agra", areas: "10 areas", status: "live", img: "/cities/agra.jpg" },
  { name: "Delhi", areas: "18 areas", status: "live", img: "/cities/delhi.jpg" },
  { name: "Mumbai", areas: "15 areas", status: "live", img: "/cities/mumbai.jpg" },
  { name: "Hyderabad", areas: "9 areas", status: "live", img: "/cities/hyderabad.jpg" },
  { name: "Jaipur", areas: "7 areas", status: "live", img: "/cities/jaipur.jpg" },
  { name: "Bangalore", areas: "Launching Soon", status: "soon", img: "/cities/bangalore.jpg" },
  { name: "Amritsar", areas: "Launching Soon", status: "soon", img: "/cities/amritsar.jpg" },
  { name: "Jodhpur", areas: "Coming Soon", status: "coming", img: "/cities/jodhpur.jpg" },
  { name: "Mysore", areas: "Coming Soon", status: "coming", img: "/cities/mysore.jpg" },
  { name: "Hampi", areas: "Coming Soon", status: "coming", img: "/cities/hampi.jpg" },
  { name: "Mahabalipuram", areas: "Coming Soon", status: "coming", img: "/cities/mahabalipuram.jpg" },
];
