import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import foodTacos from "@/assets/food-tacos.png";
import foodJackfruit from "@/assets/food-jackfruit.png";
import foodCombo from "@/assets/food-combo.png";
import foodSteak from "@/assets/food-steak.png";
import foodDrinks from "@/assets/food-drinks.png";
import foodAddons from "@/assets/food-addons.png";

export const menuData = {
  protein: {
    label: "Protein",
    items: ["Sista's Chicken", "Sista's Carne Asada"],
    image: foodSteak,
  },
  vegan: {
    label: "Vegan",
    items: ["Sista's Jack Fruit", "Sista's Mushroom", "Sista's Walnut Meat"],
    image: foodJackfruit,
  },
  combos: {
    label: "Combo Plate",
    items: [
      "Tacos, Rice, Beans & a Drink",
      "Quesadilla, Rice, Beans & a Drink",
    ],
    image: foodCombo,
  },
  drinks: {
    label: "Drinks",
    items: ["Soda", "Water", "Sista's Koolaid"],
    image: foodDrinks,
  },
  addons: {
    label: "Add Ons",
    items: ["Blue Taki", "Red Taki", "Hot Puffs", "Sour Cream", "Guac Sauce", "Extra Cheese"],
    image: foodAddons,
  },
  sides: {
    label: "Sides",
    items: ["Sista's Rice", "Sista's Refried Beans"],
    image: foodTacos,
  },
};

const MenuSection = () => {
  const navigate = useNavigate();
  const categories = Object.values(menuData);

  return (
    <section className="py-28 bg-background" id="menu">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-medium mb-4">
            Our Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
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
              transition={{ delay: i * 0.06 }}
              className="border border-border bg-background group hover:border-primary/30 transition-colors overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary/30">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-widest">
                  {cat.label}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm text-foreground py-1.5 border-b border-border/40 last:border-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" onClick={() => navigate("/book")} className="font-display text-sm tracking-wide uppercase">
            Book Your Event
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
