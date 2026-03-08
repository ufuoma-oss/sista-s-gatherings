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
              className="w-full aspect-[4/5] object-cover rounded-2xl"
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
                Founded by two sisters, we grew up cooking together and sharing
                meals with family and friends. What started as a love for
                creating food turned into a passion for bringing people together
                through every dish we make.
              </p>
              <p className="font-body text-foreground leading-[1.8] text-[15px]">
                We bring flavor and care to every dish we serve. From our
                signature tacos to full catering spreads, each meal is made fresh
                and designed to delight your guests.
              </p>
              <p className="font-body text-foreground leading-[1.8] text-[15px]">
                Whether it's a family gathering, a party, or a corporate event,
                we focus on tasty food, great presentation, and a stress-free
                experience. Every bite is crafted to make your event memorable.
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