import { motion } from "framer-motion";
import aboutImage from "@/assets/about-sisters.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="The sisters behind Sista's Cuisine cooking together"
              className="rounded-lg shadow-xl w-full aspect-square object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body font-medium mb-3">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Welcome to
              <br />
              <span className="italic">Sista's Cuisine</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Founded by two sisters, we grew up cooking together and sharing
              meals with family and friends. What started as a love for creating
              food turned into a passion for bringing people together through
              every dish we make.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Whether it's a family gathering, a party, or a corporate event, we
              focus on tasty food, great presentation, and a stress-free
              experience. Every bite is crafted to make your event memorable.
            </p>

            <div className="flex gap-12">
              <div>
                <span className="font-display text-5xl font-bold text-primary">8</span>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Years of
                  <br />
                  <span className="uppercase tracking-wider font-medium text-foreground">Experience</span>
                </p>
              </div>
              <div>
                <span className="font-display text-5xl font-bold text-primary">1000+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Favorite
                  <br />
                  <span className="uppercase tracking-wider font-medium text-foreground">Dishes Served</span>
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
