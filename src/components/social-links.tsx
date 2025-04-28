"use client";

import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    id: "twitter",
    name: "Twitter (X)",
    url: "https://x.com/dev_pom",
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
        className="size-4"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    id: "github",
    name: "Github",
    url: "https://github.com/mystic-mango",
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
        className="size-4"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    id: "resume",
    name: "Resume",
    url: "/Tom-Blake-Resume.pdf",
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
        className="size-4"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discordapp.com/users/1079497261966430298",
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
        className="size-4"
      >
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
        <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
        <path d="M7.5 16.5c3.5 1 5.5 1 9 0" />
        <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7-1.5-3.5-3-4-3-4" />
        <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.477-5.833 0-7 1.5-3.5 2.572-4 3.333-4" />
        <path d="M12 7v1" />
        <path d="M12 16v1" />
        <path d="M9 11v2" />
        <path d="M15 11v2" />
      </svg>
    ),
  },
  {
    id: "telegram",
    name: "Telegram",
    url: "https://t.me/mystic_mango",
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
        className="size-4"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  
];

export function SocialLinks() {
  return (
    <div className="mt-12 sm:mt-16">
      <div className="text-xs  text-muted-foreground mb-3 sm:mb-4">
        You can check these <span className="text-foreground">links</span> if you wish to
      </div>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <Button
            key={link.id}
            variant="outline"
            size="sm"
            className="gap-1.5 sm:gap-2 rounded-full py-1 h-auto text-xs  bg-card hover:bg-muted border-border"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="size-3 sm:size-4">
                {link.icon}
              </span>
              <span className="inline-block mr-0.5">{link.name}</span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
} 