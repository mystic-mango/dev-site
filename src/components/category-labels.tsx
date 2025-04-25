"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

const categories: Category[] = [
  {
    id: "client",
    name: "Client",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 1.9.6 2.7" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    id: "processing",
    name: "Processing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5"
      >
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M17 12a5 5 0 0 1-5 5" />
      </svg>
    ),
  },
  {
    id: "development",
    name: "Development",
    isActive: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5"
      >
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    id: "design",
    name: "Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5"
      >
        <path d="M12 3v12" />
        <path d="M8 5v10" />
        <path d="M4 7v6" />
        <path d="M16 7v6" />
        <path d="M20 5v10" />
      </svg>
    ),
  },
  {
    id: "legion",
    name: "Legion",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5"
      >
        <rect x="4" y="2" width="4" height="20" />
        <rect x="12" y="2" width="4" height="20" />
        <rect x="16" y="2" width="4" height="20" />
      </svg>
    ),
  },
];

export function CategoryLabels() {
  return (
    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant={category.isActive ? "default" : "outline"}
          className={cn(
            "gap-1 xs:gap-1.5 rounded-full px-2 xs:px-3 py-0.5 xs:py-1 text-2xs xs:text-xs",
            category.isActive 
              ? "bg-primary text-primary-foreground hover:bg-primary/90" 
              : "bg-card text-muted-foreground border-border hover:bg-muted"
          )}
        >
          <span className="xs:block">{category.icon}</span>
          {category.name}
        </Badge>
      ))}
    </div>
  );
} 