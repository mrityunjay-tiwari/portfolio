import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/home-page/hero-section";
import ProjectPage from "@/components/projects/projects-page";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <div className="h-screen"></div> */}
      <ProjectPage />
      <Experience />
      <Footer />
    </>
  );
}
