"use client";

import { Button } from "@/components/ui/button";

export function ProfileHeader() {
  return (
    <div className="mb-12 sm:mb-24">
      <div className="text-sm text-muted-foreground mb-2">
        Hey, It&apos;s me 👋
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold tracking-widest mb-2 font-mono">Tom Blake <span className="text-muted-foreground text-sm"> [aka Mango]</span></h1>
      <div className="text-muted-foreground text-sm mb-4 sm:mb-6">
        @pom-dev @mystic-mango
      </div>
      
      <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
        <div>
          Yup! I&apos;m a <span className="text-foreground font-medium">Web Developer</span>. Big deal, right? But wait — there&apos;s more! I&apos;m not just any developer,
          I&apos;m a <span className="text-foreground font-medium">Full Stack Developer</span>. And if that wasn&apos;t enough, guess what?
          maybe <span className="text-foreground font-medium">Freelancer</span>? Oh yeah, I&apos;ve got that badge too!
        </div>
        
        <div>
          I love both <span className="text-foreground font-medium">Development</span> and <span className="text-foreground font-medium">Design</span>. So, That means I can
          create beautiful and functional websites. I&apos;m always looking
          for new opportunities to learn and grow.
        </div>
        
        <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
          <Button variant="outline" className="gap-2 rounded-full py-1 h-auto text-xs bg-card hover:bg-muted"
          onClick={() => window.open('https://calendly.com/mystic-mango', '_blank')}
          >
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
              className="size-4"
            >
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              <line x1="12" y1="16" x2="12" y2="16.01" />
              <path d="M8 16H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4h-2" />
            </svg>
            Book a Meeting
          </Button>
          
          <Button variant="outline" className="gap-2 rounded-full py-1 h-auto text-xs bg-card hover:bg-muted"
          onClick={() => window.location.href = 'mailto:tom@tomblake.dev'}
          >
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
              className="size-4"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            Email Me
          </Button>
        </div>
      </div>
    </div>
  );
} 