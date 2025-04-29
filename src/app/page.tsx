import { Sidebar } from "@/components/sidebar";
import { ProfileHeader } from "@/components/profile-header";
// import { CategoryLabels } from "@/components/category-labels";
import { ContributionCalendar } from "@/components/contribution-calendar";
import { Timeline } from "@/components/timeline";
import { SocialLinks } from "@/components/social-links";
import { ProjectCards } from "@/components/project-cards";
import { CiHeart } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen bg-background">
        <Sidebar />
        
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[540px] md:max-w-3xl px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10 pb-24 sm:pb-28 md:pb-10">
            <ProfileHeader />
            {/* <CategoryLabels /> */}
            <ContributionCalendar />
            <Timeline />
            <SocialLinks />
            <ProjectCards />
          </div>
        </div>
      </main>
      <footer className="w-full flex flex-col items-center justify-center py-8 mt-8 mb-12 lg:mb-0">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row items-center gap-1 text-sm text-muted-foreground font-medium">Designed &amp; Made with <span role="img" aria-label="love"><CiHeart />
          </span></div>
          <div className="text-xs text-muted-foreground">© 2025. All rights reserved.</div>

        </div>
      </footer>
    </>
  );
}
