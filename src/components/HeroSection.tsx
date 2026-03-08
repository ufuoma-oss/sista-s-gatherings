import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-background pt-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[2.75rem] md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1] mb-6">
              Good Food for
              <br />
              Every Gathering
            </h1>
            <p className="font-body text-base md:text-lg text-foreground font-semibold max-w-lg mb-12 leading-relaxed">
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
                className="px-8 py-6 text-sm font-body font-medium tracking-wide rounded-full border-border hover:bg-secondary"
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
