import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ChefsSection from "@/components/ChefsSection";
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
      <ServicesSection />
      <GallerySection />
      <ChefsSection />
      <MenuSection />
      <VideoStoriesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
