import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";

const images = [
  { src: gallery1, alt: "Taco platter with salsas" },
  { src: gallery2, alt: "Crispy tacos with toppings" },
  { src: gallery3, alt: "Fresh walnut meat with tortillas" },
  { src: gallery4, alt: "Homemade salsas" },
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-card" id="gallery">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Our Food
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15]">
            Made with Love
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;