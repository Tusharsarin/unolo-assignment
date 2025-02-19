"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Calendar,
  Menu,
  X,
  ClipboardList,
  MapPin,
  Target,
  FileText,
  ShoppingCart,
  CreditCard,
  Building,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("professional");

  const navigation = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: "Attendance",
      icon: Users,
      href: "/#",
    },
    {
      title: "Leaves",
      icon: Calendar,
      href: "/#",
    },
    {
      title: "Organization",
      icon: Users,
      href: "/#",
    },
    {
      title: "Tasks",
      icon: ClipboardList,
      href: "/#",
    },
    {
      title: "Beat",
      icon: MapPin,
      href: "/#",
    },
    {
      title: "Targets",
      icon: Target,
      href: "/#",
    },
    {
      title: "Form",
      icon: FileText,
      href: "/#",
    },
    {
      title: "Order",
      icon: ShoppingCart,
      href: "/#",
    },
    {
      title: "Expenses",
      icon: CreditCard,
      href: "/#",
    },
    {
      title: "Clients & Sites",
      icon: Building,
      href: "/#",
    },
    {
      title: "Reports",
      icon: FileText,
      href: "/#",
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 h-full
        w-64 bg-white border-r transform transition-transform duration-200 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex justify-between items-center px-6 border-b">
            {/* <img src="/logo.png" alt="Unolo" className="h-8" /> */}
            <h1 className="text-2xl font-semibold text-gray-900">Unolo</h1>
            <Select
              value={selectedPlan}
              onValueChange={setSelectedPlan}
            >
              <SelectTrigger className=" ml-4 focus:outline-none focus:ring-none focus-visible:ring-none border-none px-3 w-32 font-semibold focus:ring-white bg-gray-100 p-2 h-fit">
                <SelectValue placeholder="Select plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="team">Team</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-2 rounded-md text-sm
                    ${isActive(item.href)
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
} 