"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Export as a named export
export const projects = [
  {
    id: "basdaq",
    title: "Basdaq",
    subtitle: "Beracahin native trading terminal for decentralized trading",
    image: "/basdaq.png",
    description: "A comprehensive trading terminal built for the Berachain ecosystem, enabling decentralized trading with advanced charting and order functionality.",
    technologies: ["React", "TypeScript", "Web3", "TradingView API"],
    liveUrl: "https://basdaq.example.com",
    githubUrl: "https://github.com/mystic-mango/basdaq",
  },
  {
    id: "gummi",
    title: "Gummi",
    subtitle: "The Gummi.fi landing page",
    image: "/gummi.png",
    description: "Landing page for Gummi.fi, a DeFi platform focused on simplifying crypto asset management with a sleek, intuitive interface.",
    technologies: ["Next.js", "TailwindCSS", "React", "Framer Motion"],
    liveUrl: "https://gummi.fi",
    githubUrl: "https://github.com/mystic-mango/gummi-landing",
  },
  {
    id: "gummi95",
    title: "Gummi95",
    subtitle: "Win95 Teaser App for Gummi",
    image: "/gummi95.png",
    description: "A nostalgic Windows 95-inspired teaser application for the Gummi platform, combining retro aesthetics with modern functionality.",
    technologies: ["React", "React95", "JavaScript", "CSS"],
    liveUrl: "https://gummi95.example.com",
    githubUrl: "https://github.com/mystic-mango/gummi95",
  },
  {
    id: "sharedstake",
    title: "SharedStake",
    subtitle: "SharedStake Ethereum liquid staking derivative UI",
    image: "/sharedstake.png",
    description: "User interface for SharedStake, an Ethereum liquid staking solution that allows users to stake ETH while maintaining liquidity.",
    technologies: ["Next.js", "ethers.js", "TailwindCSS", "TypeScript"],
    liveUrl: "https://sharedstake.org",
    githubUrl: "https://github.com/mystic-mango/sharedstake-ui",
  },
];

export function ProjectCards() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="mt-8 sm:mt-12">
      <div className="mb-4 sm:mb-6 text-2xs sm:text-xs text-muted-foreground flex items-center justify-between">
        <div>
          Still not sure? Check out my <span className="text-foreground font-medium">Projects</span>
        </div>
        <Link href="/projects" className="text-xs text-foreground underline-offset-4 hover:underline">
          View all projects →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="border border-border bg-card/70 overflow-hidden transition-all duration-300 hover:bg-card hover:border-primary/20 hover:shadow-sm hover:-translate-y-1">
              <CardContent className="p-0 relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 flex flex-col justify-end p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{project.subtitle}</p>
                </div>
                
                {/* Image with loading state */}
                <div className="absolute inset-0 w-full h-full bg-muted">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className={`transition-all duration-500 hover:scale-105 ${imagesLoaded[project.id] ? 'opacity-100' : 'opacity-0'}`}
                    priority={project.id === "basdaq" || project.id === "gummi"}
                    quality={85}
                    onLoad={() => handleImageLoad(project.id)}
                    onError={() => handleImageLoad(project.id)}
                  />
                  
                  {/* Loading placeholder */}
                  {!imagesLoaded[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-card">
                      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 