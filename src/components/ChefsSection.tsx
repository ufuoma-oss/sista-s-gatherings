import { motion } from "framer-motion";
import chef1 from "@/assets/chef-1.png";
import chef2 from "@/assets/chef-2.jpeg";

const chefs = [
  {
    name: "Chef Tiffany",
    title: "Co-Founder & Head Chef",
    image: chef1,
    description:
      "With a passion for bold flavors and creative presentation, Chef Tiffany brings energy and innovation to every dish.",
  },
  {
    name: "Chef Brianna",
    title: "Co-Founder & Executive Chef",
    image: chef2,
    description:
      "Classically trained with a soulful touch, Chef Brianna ensures every plate meets the highest standard of quality.",
  },
];

const ChefsSection = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground" id="chefs">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="h-[3px] w-16 bg-accent mx-auto mb-8" />
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-accent font-semibold mb-5">
            The Founders
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]">
            Meet Our Chefs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {chefs.map((chef, i) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden mb-8">
                <div className="absolute inset-0 bg-accent/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full aspect-[3/4] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {chef.name}
              </h3>
              <p className="font-body text-[13px] uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                {chef.title}
              </p>
              <p className="font-body text-primary-foreground/70 leading-relaxed text-[15px]">
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
