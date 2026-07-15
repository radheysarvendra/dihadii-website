import {
  UserCircle2,
  Wrench,
  MapPin,
  CalendarClock,
  ClipboardList,
  IdCard,
  LayoutGrid,
  FileEdit,
  MapPinned,
  FileSearch,
  MessageCircle,
  Activity,
  UserCog,
  ClipboardCheck,
  Users,
  Inbox,
  Users2,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type Audience = "labour" | "customer" | "contractor";

export interface AppFeature {
  id: string;
  audience: Audience;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const AUDIENCE_TABS: { value: Audience; label: string }[] = [
  { value: "labour", label: "For Labourers" },
  { value: "customer", label: "For Customers" },
  { value: "contractor", label: "For Contractors" },
];

/** Phone screenshot shown alongside each audience's feature set. */
export const AUDIENCE_PREVIEW: Record<Audience, { src: string; alt: string }> = {
  labour: {
    src: "/app-screens/step-1.png",
    alt: "Dehaadi app home screen with role-selection options: I am a Labour, I need a Labour, I am a Contractor, I need a Contractor",
  },
  customer: {
    src: "/app-screens/step-2.png",
    alt: "Dehaadi app screen showing a selected work category, work location fields, and matched worker counts",
  },
  contractor: {
    src: "/app-screens/step-3.png",
    alt: "Dehaadi app screen for selecting a work category and skills when posting a requirement",
  },
};

export const APP_FEATURES: AppFeature[] = [
  // For Labourers
  {
    id: "labour-profile",
    audience: "labour",
    title: "Create Profile",
    description: "Add your skills, experience, availability, and work details.",
    icon: UserCircle2,
  },
  {
    id: "labour-skills",
    audience: "labour",
    title: "Choose Skills",
    description: "Select your trade and skill areas so the right work finds you.",
    icon: Wrench,
  },
  {
    id: "labour-nearby-work",
    audience: "labour",
    title: "Find Nearby Work",
    description: "Browse work opportunities filtered by your area.",
    icon: MapPin,
  },
  {
    id: "labour-availability",
    audience: "labour",
    title: "Update Availability",
    description: "Mark yourself available or busy so requests match your schedule.",
    icon: CalendarClock,
  },
  {
    id: "labour-view-requests",
    audience: "labour",
    title: "View Work Requests",
    description: "Check requests sent to you before deciding to respond.",
    icon: ClipboardList,
  },
  {
    id: "labour-manage-details",
    audience: "labour",
    title: "Manage Work Details",
    description: "Keep your experience, availability, and profile info current.",
    icon: IdCard,
  },

  // For Customers
  {
    id: "customer-category",
    audience: "customer",
    title: "Select Service Category",
    description: "Choose the category of work you need done.",
    icon: LayoutGrid,
  },
  {
    id: "customer-submit-requirement",
    audience: "customer",
    title: "Submit Work Requirement",
    description: "Describe the work and post your requirement.",
    icon: FileEdit,
  },
  {
    id: "customer-location",
    audience: "customer",
    title: "Add Work Location",
    description: "Set the state, district, and area where the work is needed.",
    icon: MapPinned,
  },
  {
    id: "customer-review",
    audience: "customer",
    title: "Review Request Details",
    description: "Double-check your requirement details before finalising.",
    icon: FileSearch,
  },
  {
    id: "customer-contact",
    audience: "customer",
    title: "Contact Worker/Contractor",
    description: "Reach out directly to discuss the work.",
    icon: MessageCircle,
  },
  {
    id: "customer-track",
    audience: "customer",
    title: "Track Request Status",
    description: "Follow your request as it moves along.",
    icon: Activity,
  },

  // For Contractors
  {
    id: "contractor-profile",
    audience: "contractor",
    title: "Create Contractor Profile",
    description: "Set up your contractor profile with your project experience.",
    icon: UserCog,
  },
  {
    id: "contractor-requirements",
    audience: "contractor",
    title: "Manage Project Requirements",
    description: "Define what your project needs, category by category.",
    icon: ClipboardCheck,
  },
  {
    id: "contractor-find-teams",
    audience: "contractor",
    title: "Find Labour Teams",
    description: "Search for available workers who match your project.",
    icon: Users,
  },
  {
    id: "contractor-review-requests",
    audience: "contractor",
    title: "Review Work Requests",
    description: "Go through incoming requests for your projects.",
    icon: Inbox,
  },
  {
    id: "contractor-coordinate",
    audience: "contractor",
    title: "Coordinate Workforce",
    description: "Keep track of assigned workers across your projects.",
    icon: Users2,
  },
  {
    id: "contractor-activity",
    audience: "contractor",
    title: "Manage Project Activity",
    description: "Monitor progress and activity across your active projects.",
    icon: BarChart3,
  },
];
