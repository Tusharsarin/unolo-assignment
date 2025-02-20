import { Clock, FileText, LayoutGrid, LucideIcon, MapPin, Shield } from "lucide-react";

export interface Tab {
  id: number;
  name: string;
  href: string;
  icon: LucideIcon;
}

export const tabs: Tab[] = [
    {
      id: 1,
      name: "Overview",
      href: "/dashboard",
      icon: LayoutGrid,
    },
    {
      id: 2,
      name: "Live Location",
      href: "/dashboard/#",
      icon: MapPin,
    },
    {
      id: 3,
      name: "Timeline",
      href: "/dashboard/#",
      icon: Clock,
    },
    {
      id: 4,
      name: "Card View",
      href: "/dashboard/#",
      icon: FileText,
    },
    {
      id: 5,
      name: "Compliance Status",
      href: "/dashboard/#",
      icon: Shield,
    },
  ];