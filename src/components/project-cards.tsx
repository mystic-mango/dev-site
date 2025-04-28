"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/app/config/projects";

export function ProjectCards() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="mt-8 sm:mt-12">
      <div className="mb-4 sm:mb-6 text-xs text-muted-foreground flex items-center justify-between sm:flex-row flex-col gap-2">
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
            <Card className="border border-border bg-card/70 overflow-hidden transition-all duration-300 hover:bg-card hover:border-primary/20 hover:shadow-sm hover:-translate-y-1 p-0">
              <CardContent className="p-0 relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-background/99 to-transparent z-10 flex flex-col justify-end p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
                  <p className="text-foreground text-xs sm:text-sm">{project.subtitle}</p>
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