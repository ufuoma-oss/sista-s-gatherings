import { motion } from "framer-motion";
import aboutImage from "@/assets/about-sisters.jpg";

const AboutSection = () => {
  return (
    <section className="py-28 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="The sisters behind Sista's Cuisine cooking together"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight tracking-tight">
              Two Sisters,
              <br />
              One Kitchen
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-5 text-base">
              Founded by two sisters, we grew up cooking together and sharing
              meals with family and friends. What started as a love for creating
              food turned into a passion for bringing people together through
              every dish we make.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-12 text-base">
              Whether it's a family gathering, a party, or a corporate event, we
              focus on tasty food, great presentation, and a stress-free
              experience. Every bite is crafted to make your event memorable.
            </p>

            <div className="flex gap-16">
              <div>
                <span className="font-display text-5xl font-bold text-foreground">8</span>
                <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-widest font-medium">
                  Years Experience
                </p>
              </div>
              <div>
                <span className="font-display text-5xl font-bold text-foreground">1000+</span>
                <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-widest font-medium">
                  Dishes Served
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
