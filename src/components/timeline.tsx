"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TimelineItem = {
  id: string;
  title: string;
  period: string;
  icon: React.ReactNode;
};

const timelineItems: TimelineItem[] = [
  {
    id: "freelance",
    title: "Freelance",
    period: "2022 - Now",
    icon: (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-card flex items-center justify-center text-foreground">
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
          className="size-3 sm:size-4"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
    ),
  },
  {
    id: "mentra",
    title: "Mentra.gg",
    period: "2022 - 2024",
    icon: (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-card flex items-center justify-center text-foreground">
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
          className="size-3 sm:size-4"
        >
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          <path d="M12 16h3.5a3.5 3.5 0 1 1 0 7H12v-7z" />
        </svg>
      </div>
    ),
  },
  {
    id: "graduation",
    title: "Graduation",
    period: "2019 - 2022",
    icon: (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-card flex items-center justify-center text-foreground">
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
          className="size-3 sm:size-4"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      </div>
    ),
  },
];

export function Timeline() {
  return (
    <div className="w-full mt-6 sm:mt-8">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-end">
          <TabsList className="mb-4 sm:mb-6 bg-card rounded-md p-1">
            <TabsTrigger value="all" className="text-2xs sm:text-xs rounded-md data-[state=active]:bg-muted">ALL</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {timelineItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 sm:gap-4">
                {item.icon}
                <div>
                  <div className="font-medium text-foreground text-xs sm:text-sm">{item.title}</div>
                  <div className="text-2xs sm:text-xs text-muted-foreground">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 