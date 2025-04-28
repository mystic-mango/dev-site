"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Projects",
    path: "/projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    name: "Skills",
    path: "/skills",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar - left side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 h-auto hidden lg:flex flex-col items-center py-6 px-3 bg-sidebar rounded-xl shadow-lg border border-sidebar-border z-50">
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-md transition-colors",
                pathname === item.path
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
              )}
            >
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
          <div className="mt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile navigation - bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden flex items-center justify-center py-3 px-4 bg-sidebar border-t border-sidebar-border z-50 backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center justify-between w-full max-w-sm mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                pathname === item.path
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
              )}
            >
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
} 