import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MenuSection from "@/components/MenuSection";
import ChefsSection from "@/components/ChefsSection";
import GallerySection from "@/components/GallerySection";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <ChefsSection />
      <GallerySection />
      <VideoStoriesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
