import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const menuData = {
  protein: {
    label: "Protein",
    items: ["Sista's Chicken", "Sista's Carne Asada"],
  },
  vegan: {
    label: "Vegan",
    items: ["Sista's Jack Fruit", "Sista's Mushroom", "Sista's Walnut Meat"],
  },
  combos: {
    label: "Combo Plate",
    items: [
      "Tacos, Rice, Beans & a Drink",
      "Quesadilla, Rice, Beans & a Drink",
    ],
  },
  drinks: {
    label: "Drinks",
    items: ["Soda", "Water", "Sista's Koolaid"],
  },
  addons: {
    label: "Add Ons",
    items: ["Blue Taki", "Red Taki", "Hot Puffs", "Sour Cream", "Guac Sauce", "Extra Cheese"],
  },
  sides: {
    label: "Sides",
    items: ["Sista's Rice", "Sista's Refried Beans"],
  },
};

const MenuSection = () => {
  const navigate = useNavigate();
  const categories = Object.values(menuData);

  return (
    <section className="py-24 bg-background" id="menu">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-body font-medium mb-3">
            Our Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What We Serve
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-4 uppercase tracking-wider">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-foreground py-2 border-b border-border/50 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button variant="hero" size="lg" onClick={() => navigate("/book")}>
            Book Your Event
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
