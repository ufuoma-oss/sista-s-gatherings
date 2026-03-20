import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpeg";
import heroImage from "@/assets/gallery-1.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[2.75rem] md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Good Food for
              <br />
              Every Gathering
            </h1>
            <p className="font-body text-base md:text-lg text-white/90 max-w-lg mb-12 leading-relaxed">
              Fresh, homestyle meals prepared for parties, meetings, and special
              events. We handle the cooking so you can enjoy the moment.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                className="px-8 py-6 text-sm font-body font-medium tracking-wide rounded-full"
                onClick={() => navigate("/book")}
              >
                Book Your Event
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-sm font-body font-medium tracking-wide rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20"
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Menu
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
