import Link from "next/link";
import Image from "next/image";
import { projects } from "@/components/project-cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

// Define projects directly in case the import fails
const projectsData = [
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

// Use imported projects if available, otherwise use local data
const projectsToUse = Array.isArray(projects) ? projects : projectsData;

export function generateStaticParams() {
  return projectsToUse.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsToUse.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main className="flex min-h-screen bg-background">
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[540px] md:max-w-3xl px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10 pb-24 sm:pb-28 md:pb-10">
          <div className="mb-6 sm:mb-8">
            <Link href="/projects" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
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
                className="size-3 sm:size-4"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to projects
            </Link>
          </div>
          
          <div className="border border-border rounded-lg overflow-hidden bg-card/70">
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                quality={95}
              />
            </div>
            
            <div className="p-4 sm:p-6">
              <h1 className="text-xl sm:text-2xl font-bold">{project.title}</h1>
              <p className="text-muted-foreground mt-1">{project.subtitle}</p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h2 className="font-medium text-sm sm:text-base mb-2">About this project</h2>
                  <p className="text-sm sm:text-base">{project.description}</p>
                </div>
                
                <div>
                  <h2 className="font-medium text-sm sm:text-base mb-2">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 flex flex-wrap gap-3">
                  <Button asChild size="sm" variant="default">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
                        className="size-3.5 mr-1.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
                        className="size-3.5 mr-1.5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12">
            <h2 className="text-lg font-medium mb-4">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {projectsToUse
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((otherProject) => (
                  <Link href={`/projects/${otherProject.id}`} key={otherProject.id}>
                    <div className="border border-border rounded-lg overflow-hidden bg-card/70 transition-all hover:bg-card hover:border-primary/20 hover:shadow-sm">
                      <div className="relative h-32 sm:h-40">
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-3 sm:p-4">
                        <h3 className="font-medium">{otherProject.title}</h3>
                        <p className="text-xs text-muted-foreground">{otherProject.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 