import { HeroSection } from "./hero-section";
import { OrgGrid } from "./org-grid";
import { SiteFooter } from "./site-footer";

export function HomeExperience() {
  return (
    <div className="relative">
      <HeroSection />
      <OrgGrid />
      <SiteFooter />
    </div>
  );
}
