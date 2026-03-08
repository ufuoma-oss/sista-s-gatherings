import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              Catering & Events
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
              Good Food for
              <br />
              <span className="text-primary">Every Gathering</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed font-light">
              Fresh, homestyle meals prepared for parties, meetings, and special
              events. We handle the cooking so you can enjoy the moment.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="px-8 py-6 text-sm font-display tracking-wide uppercase"
                onClick={() => navigate("/book")}
              >
                Book Us Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-sm font-display tracking-wide uppercase"
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default HeroSection;
