import { motion } from "framer-motion";
import aboutImage from "@/assets/about-sisters.jpg";

const AboutSection = () => {
  return (
    <section className="py-32 bg-background" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/10 -z-10" />
            <img
              src={aboutImage}
              alt="The sisters behind Sista's Cuisine"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-[3px] w-16 bg-accent mb-8" />
            <p className="font-body text-[13px] uppercase tracking-[0.3em] text-accent font-semibold mb-5">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground mb-8 leading-[1.1]">
              Two Sisters,
              <br />
              <em className="font-medium">One Passion</em>
            </h2>
            <p className="font-body text-muted-foreground leading-[1.8] mb-5 text-[15px]">
              Founded by two sisters with a deep love for cooking, Sista's Cuisine
              was born from family traditions and a desire to bring people together
              through food. Every dish carries the warmth of home.
            </p>
            <p className="font-body text-muted-foreground leading-[1.8] mb-14 text-[15px]">
              From intimate dinner parties to large-scale corporate events, we
              deliver bold, unforgettable flavors with flawless presentation and
              service that makes every host look like a star.
            </p>

            <div className="flex gap-16 border-t border-border pt-10">
              <div>
                <span className="font-display text-5xl font-bold text-foreground">8+</span>
                <p className="font-body text-[11px] text-muted-foreground mt-3 uppercase tracking-[0.2em] font-semibold">
                  Years of Excellence
                </p>
              </div>
              <div>
                <span className="font-display text-5xl font-bold text-foreground">1K+</span>
                <p className="font-body text-[11px] text-muted-foreground mt-3 uppercase tracking-[0.2em] font-semibold">
                  Events Catered
                </p>
              </div>
              <div>
                <span className="font-display text-5xl font-bold text-foreground">5★</span>
                <p className="font-body text-[11px] text-muted-foreground mt-3 uppercase tracking-[0.2em] font-semibold">
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
