import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChefsSection from "@/components/ChefsSection";
import ServicesSection from "@/components/ServicesSection";
import MenuSection from "@/components/MenuSection";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChefsSection />
      <ServicesSection />
      <MenuSection />
      <VideoStoriesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
