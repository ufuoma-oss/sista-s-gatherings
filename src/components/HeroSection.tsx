import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sista's Cuisine catering spread with tacos, rice, and fresh ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
            Sista's Cuisine
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Good Food for
            <br />
            <span className="italic text-primary">Every Gathering</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-md mb-10 leading-relaxed">
            Fresh, homestyle meals prepared for parties, meetings, and special
            events. We handle the cooking so you can enjoy the moment.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="px-10 py-6 text-base"
            onClick={() => navigate("/book")}
          >
            Book Us Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
