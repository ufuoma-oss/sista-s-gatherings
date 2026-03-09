import { motion } from "framer-motion";
import chef1 from "@/assets/chef-1.png";
import chef2 from "@/assets/chef-2.jpeg";

const chefs = [
  {
    name: "Chef Hayley",
    title: "Co-Founder",
    image: chef1,
    description:
      "Hayley loves good food and making people smile. She puts heart into every plate she serves.",
  },
  {
    name: "Chef Kash",
    title: "Co-Founder",
    image: chef2,
    description:
      "Kash keeps it real with bold flavors and honest cooking. If it tastes like home, she's done her job.",
  },
];

const ChefsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background" id="chefs">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            The Founders
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15]">
            Meet Our Chefs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 max-w-4xl mx-auto">
          {chefs.map((chef, i) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                {chef.name}
              </h3>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                {chef.title}
              </p>
              <p className="font-body text-foreground leading-relaxed text-[15px] max-w-sm mx-auto">
                {chef.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;