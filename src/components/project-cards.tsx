"use client";

import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: "gaming",
    title: "Unleash Your Power",
    subtitle: "Dominate The Game",
    image: "/gaming-project.webp",
  },
  {
    id: "business",
    title: "Your Business, Our Solution",
    subtitle: "with Mentra.gg",
    image: "/business-project.webp",
  },
];

export function ProjectCards() {
  return (
    <div className="mt-8 sm:mt-12">
      <div className="mb-4 sm:mb-6 text-2xs sm:text-xs text-muted-foreground">
        Still not sure? Check out my <span className="text-foreground font-medium">Projects</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="border border-border bg-card/70 overflow-hidden">
            <CardContent className="p-0 relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 flex flex-col justify-end p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{project.subtitle}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for image - in production, use actual images */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
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
                    className="size-6 sm:size-8 text-muted-foreground"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 