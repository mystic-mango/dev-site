import { Sidebar } from "@/components/sidebar";
import { ProfileHeader } from "@/components/profile-header";
// import { CategoryLabels } from "@/components/category-labels";
import { ContributionCalendar } from "@/components/contribution-calendar";
import { Timeline } from "@/components/timeline";
import { SocialLinks } from "@/components/social-links";
import { ProjectCards } from "@/components/project-cards";

export default function Home() {
  return (
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
  );
}
