"use client";
import { Sidebar } from "@/components/Sidebar";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const showSidebar = user && !pathname.includes('/login');

  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 