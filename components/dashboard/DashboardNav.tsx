"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tab } from "@/constants/constant";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { Bell, MessageSquare } from "lucide-react";
import Link from "next/link";
import { UserDropdown } from "./UserDropdown";


export function DashboardNav({ tabs, pathname }: { tabs: Tab[]; pathname: string }) {
  // const pathname = usePathname();
  const { user } = useAuth();
  const email = user?.email || 'siddharth.kliam@gmail.com';
  const activeTab = tabs.find(tab => tab.href === pathname) || tabs[0];

  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center gap-2 w-full justify-end">
        {/* Message Button */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700">
          <MessageSquare className="h-5 w-5" />
        </button>

        {/* Notification Button */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-4 w-4 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
            14
          </span>
        </button>

        {/* User Profile Dropdown */}
        <UserDropdown email={email} />
      </div>
      <div className="flex justify-between items-center px-4">
        {/* Mobile View - Enhanced Dropdown */}
        <div className="sm:hidden w-full">
          <Select
            value={activeTab.href}
            onValueChange={(value) => {
              window.location.href = value;
            }}
          >
            <SelectTrigger className="focus:outline-none focus:ring-none focus-visible:ring-none border-none px-3 w-full font-semibold focus:ring-transparent focus:ring-offset-transparent shadow-sm mb-2 p-2 h-fit rounded-lg hover:bg-gray-50 bg-gray-50 transition-colors">
              <div className="flex items-center justify-between w-full py-2">
                <div className="flex items-center gap-3">
                  {activeTab.icon && (
                    <activeTab.icon className="h-5 w-5 text-blue-500" />
                  )}
                  <SelectValue placeholder="Select view">
                    <span className="font-medium text-gray-900">{activeTab.name}</span>
                  </SelectValue>
                </div>
                {/* <ChevronDown className="h-5 w-5 text-gray-500" /> */}
              </div>
            </SelectTrigger>
            <SelectContent className="w-full flex bg-white shadow-lg rounded-lg overflow-hidden">
              {tabs.map((tab) => (
                <SelectItem 
                  key={tab.id} 
                  value={tab.href}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 hover:bg-blue-50 cursor-pointer transition-colors",
                    pathname === tab.href ? "bg-blue-50" : ""
                  )}
                >
                  <div className="flex items-center gap-2">
                  {tab.icon && (
                    <tab.icon 
                      className={cn(
                        "h-5 w-5",
                        pathname === tab.href ? "text-blue-500" : "text-gray-500"
                      )} 
                    />
                  )}
                  <span className={cn(
                    "font-medium",
                    pathname === tab.href ? "text-blue-600" : "text-gray-700"
                  )}>
                    {tab.name}
                  </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop View - Horizontal Tabs */}
        <nav className="hidden sm:flex -mb-px space-x-2 md:space-x-4 lg:space-x-8 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={cn(
                  "flex items-center gap-2 px-1 py-2 text-sm font-medium border-b-2 whitespace-nowrap",
                  isActive
                    ? "border-blue-500 text-white bg-blue-500 p-3 rounded-ss-md rounded-se-md"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                {tab.icon && <tab.icon className="h-4 w-4" />}
                {tab.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
      </div>
    </div>
  );
} 