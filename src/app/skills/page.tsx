import { Badge } from "@/components/ui/badge";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiPrisma,
  SiFramer,
  SiVercel,
  SiUbuntu,
  SiGithub,
  SiFigma,
  SiPostman,
  SiSupabase,
  SiWagmi,
  SiCloudflare,
  SiApple,
  SiAmazon,
  SiHetzner,
  SiPython,
  SiArduino,
  SiNotion,
  SiGit,
  SiDocker,
  SiResend,
  SiStripe,
  SiEthers,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { PiCursorFill } from "react-icons/pi";
import Link from "next/link";
import { VscVscode } from "react-icons/vsc";
import { FaCircle } from "react-icons/fa";

const skills = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
    { name: "NodeJs", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Arduino", icon: <SiArduino className="text-green-200" /> },
    { name: "SQL", icon: <BsFiletypeSql className="text-blue-300" /> },  ],
  frameworks: [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "NextJs", icon: <SiNextdotjs /> },
    { name: "VueJs", icon: <SiVuedotjs className="text-green-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  ],
  tools: [
    { name: "Wagmi", icon: <SiWagmi className="text-blue-500" /> },
    { name: "Prisma", icon: <SiPrisma/> },
    { name: "ethers.js", icon: <SiEthers/> },
    { name: "Postgres", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    { name: "Privy", icon: <FaCircle/> },
  ],
  platforms: [
    { name: "Github", icon: <SiGithub /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-orange-400" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Herzner", icon: <SiHetzner className="text-red-500" /> },
    { name: "Stripe", icon: <SiStripe className="text-purple-500" /> },
    { name: "AWS", icon: <SiAmazon className="text-orange-400" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
    { name: "Resend", icon: <SiResend /> },
    { name: "MacOS", icon: <SiApple /> },
    { name: "Ubuntu", icon: <SiUbuntu className="text-orange-400" /> },
  ],
  softwares: [
    { name: "VSCode", icon: <VscVscode className="text-blue-500" /> },
    { name: "Cursor", icon: <PiCursorFill /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    { name: "Notion", icon: <SiNotion /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  ],
};

export default function SkillsPage() {
  return (
    <main className="flex min-h-screen bg-background">
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[540px] md:max-w-3xl px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10 pb-24 sm:pb-28 md:pb-10">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
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
              Back to home
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold mt-4">Skills</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Which I use? See below{" "}
            </p>
            <div className=" py-12">
              <p className="text-muted-foreground mb-2">
                Primarily, my Tech stack is{" "}
                <Badge variant="secondary" className="inline-flex gap-1">
                  <SiNextdotjs /> NextJs
                </Badge>{" "}
                framework with{" "}
                <Badge variant="secondary" className="inline-flex gap-1">
                  <SiTailwindcss /> Tailwind
                </Badge>{" "}
                as a styling library, for databases I mostly use{" "}
                <Badge variant="secondary" className="inline-flex gap-1">
                  <SiPostgresql /> Postgres
                </Badge>{" "}
                deployed on{" "}
                <Badge variant="secondary" className="inline-flex gap-1">
                  <SiSupabase /> Supabase
                </Badge>
                , but I also self-host and use {" "}
                <Badge variant="secondary" className="inline-flex gap-1">
                  <SiPrisma /> Prisma
                </Badge>{" "}
                as my ORM.
              </p>
              <p className="text-muted-foreground mb-6">
                At last, but not least, I use{" "}
                <Badge variant="secondary" className="inline-flex gap-1">
                  <PiCursorFill /> Cursor
                </Badge>{" "}
                IDE for creating awesome projects.{" "}
                <span className="text-muted-foreground">🖤</span>
              </p>

              <div className="space-y-6">
                <SkillSection title="LANGUAGES" skills={skills.languages} />
                <SkillSection title="FRAMEWORKS" skills={skills.frameworks} />
                <SkillSection title="TOOLS" skills={skills.tools} />
                <SkillSection title="PLATFORMS" skills={skills.platforms} />
                <SkillSection title="SOFTWARES" skills={skills.softwares} />
              </div>

              <p className="text-muted-foreground mt-10 text-sm">
                and a few more ... 
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SkillSection({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
}) {
  return (
    <div>
      <div className="text-xs text-muted-foreground mb-2 tracking-widest">
        &lt; {title} /&gt;
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="outline"
            className="gap-1 px-2 py-1 text-xs font-mono bg-card/80 border-border text-foreground"
          >
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
