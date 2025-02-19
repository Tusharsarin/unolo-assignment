"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!user && !pathname.includes('/login')) {
        router.push('/login');
      } else if (user && pathname === '/login') {
        router.push('/dashboard');
      }
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  // Only show sidebar if user is authenticated and not on login page
  const showSidebar = user && !pathname.includes('/login');

  return (
    <div className="flex h-screen">
      {showSidebar && (
        <aside className="w-64 bg-white border-r">
          {/* Your sidebar content */}
        </aside>
      )}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
} 