"use client";

import Link from "next/link";

type TimelineItem = {
  id: string;
  link?: string;
  title: string;
  period: string;
  icon: React.ReactNode;
};

const timelineItems: TimelineItem[] = [
  {
    id: "gummi",
    title: "Gummi.fi",
    link: "https://gummi.fi",
    period: "2023 - Now",
    icon: (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-card flex items-center justify-center text-foreground flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3 sm:w-4 sm:h-4"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
    ),
  },
  {
    id: "sharedstake",
    title: "SharedStake.org",
    link: "https://sharedstake.org",
    period: "2023 - Now",
    icon: (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-card flex items-center justify-center text-foreground flex-shrink-0">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3 sm:w-4 sm:h-4"
        >
          <path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" />
          <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
          <circle cx="12.5" cy="8.5" r="2.5" />
        </svg>
      </div>
    ),
  },
  {
    id: "manna",
    title: "Manna.aero",
    link: "https://manna.aero",
    period: "2019 - 2024",
    icon: (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-card flex items-center justify-center text-foreground flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3 sm:w-4 sm:h-4"
        >
          <path d="M4.84,8.18A3.34,3.34,0,1,1,8.18,4.84"></path>
          <path d="M8.18,19.16a3.34,3.34,0,1,1-3.34-3.34"></path>
          <path d="M15.82,4.84a3.34,3.34,0,1,1,3.34,3.34"></path>
          <path d="M19.16,15.82a3.34,3.34,0,1,1-3.34,3.34"></path>
          <line x1="19.64" y1="19.64" x2="14.86" y2="14.86"></line>
          <line x1="9.14" y1="9.14" x2="4.36" y2="4.36"></line>
          <line x1="9.14" y1="14.86" x2="4.36" y2="19.64"></line>
          <line x1="19.64" y1="4.36" x2="14.86" y2="9.14"></line>
          <path d="M14.86,9.14v5.72a2.86,2.86,0,1,1-5.72,0V9.14a2.86,2.86,0,1,1,5.72,0Z"></path>
        </svg>
      </div>
    ),
  },
  {
    id: "graduation",
    title: "Graduation",
    period: "2017 - 2021",
    icon: (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-card flex items-center justify-center text-foreground flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3 sm:w-4 sm:h-4"
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
        {timelineItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 sm:gap-4 ">
            {item.icon}
            <div>
              {item.link ? (
                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground text-xs sm:text-sm hover:underline underline-offset-2">
                  {item.title}
                </Link>
              ) : (
                <div className="font-medium text-foreground text-xs sm:text-sm">
                  {item.title}
                </div>
              )}
              <div className="text-xs  text-muted-foreground">
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
