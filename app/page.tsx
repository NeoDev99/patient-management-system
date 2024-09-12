import HeaderSection from "@/components/layouts/Header";
import BannerSection from "@/components/sections/Banner";
import HeroSection from "@/components/sections/Hero";
import Speaciality from "@/components/sections/Speaciality";
import TopDoctors from "@/components/sections/TopDoctors";
import FooterSection from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <Speaciality />
      <TopDoctors />
      <BannerSection />
      <FooterSection />
    </div>
  );
}
