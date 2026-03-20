import { motion } from "framer-motion";
import aboutImage from "@/assets/about-sisters.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="The sisters behind Sista's Cuisine"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8 leading-[1.15]">
              Welcome to Sista's Cuisine
            </h2>
            <div className="space-y-5">
              <p className="font-body text-foreground leading-[1.8] text-[15px]">
                Founded by two sisters who grew up cooking and sharing meals with family and friends, our passion for food naturally grew into a love for bringing people together.
              </p>
              <p className="font-body text-foreground leading-[1.8] text-[15px]">
                From our signature tacos to full catering spreads, every dish is made fresh with care and flavor. Whether it's a family gathering, a party, or a corporate event, we focus on delicious food, beautiful presentation, and creating a stress-free experience that makes your event memorable.
              </p>
            </div>

            <div className="flex gap-12 border-t border-border pt-8 mt-10">
              <div>
                <span className="font-display text-4xl font-extrabold text-foreground">8+</span>
                <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-[0.15em] font-medium">
                  Years of Excellence
                </p>
              </div>
              <div>
                <span className="font-display text-4xl font-extrabold text-foreground">1K+</span>
                <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-[0.15em] font-medium">
                  Events Catered
                </p>
              </div>
              <div>
                <span className="font-display text-4xl font-extrabold text-foreground">5★</span>
                <p className="font-body text-xs text-muted-foreground mt-2 uppercase tracking-[0.15em] font-medium">
                  Client Rating
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