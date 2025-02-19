import { Shield } from "lucide-react";
import { FileText } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { LayoutGrid } from "lucide-react";

export const tabs = [
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