import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100vh] flex items-center bg-card pt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[3px] bg-accent mb-8"
            />
            <p className="font-body text-[13px] uppercase tracking-[0.3em] text-accent font-semibold mb-6">
              Catering & Private Events — Los Angeles
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[1.05] mb-8">
              Elevated
              <br />
              Homestyle
              <br />
              <em className="text-accent font-medium">Cuisine.</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mb-14 leading-relaxed font-light">
              Fresh, bold flavors crafted for weddings, corporate events, and
              private gatherings. Two sisters. One unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                className="px-10 py-7 text-[13px] font-body font-semibold tracking-[0.15em] uppercase rounded-full"
                onClick={() => navigate("/book")}
              >
                Book Your Event
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-7 text-[13px] font-body font-semibold tracking-[0.15em] uppercase rounded-full border-foreground/20 hover:bg-foreground/5"
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-accent/[0.04] to-transparent hidden lg:block" />
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-display text-[10rem] font-bold text-foreground/[0.03] leading-none select-none"
        >
          SC
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
