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
  protein: { label: "Protein", items: ["Sista's Chicken", "Sista's Carne Asada"], image: foodSteak },
  vegan: { label: "Vegan", items: ["Sista's Jack Fruit", "Sista's Mushroom", "Sista's Walnut Meat"], image: foodJackfruit },
  combos: { label: "Combo Plate", items: ["Tacos, Rice, Beans & a Drink", "Quesadilla, Rice, Beans & a Drink"], image: foodCombo },
  drinks: { label: "Drinks", items: ["Soda", "Water", "Sista's Koolaid"], image: foodDrinks },
  addons: { label: "Add Ons", items: ["Blue Taki", "Red Taki", "Hot Puffs", "Sour Cream", "Guac Sauce", "Extra Cheese"], image: foodAddons },
  sides: { label: "Sides", items: ["Sista's Rice", "Sista's Refried Beans"], image: foodTacos },
};

const MenuSection = () => {
  const navigate = useNavigate();
  const categories = Object.values(menuData);

  return (
    <section className="py-24 md:py-32 bg-background" id="menu">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            The Menu
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15]">
            What We Serve
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl overflow-hidden"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  {cat.label}
                </h3>
                <ul className="space-y-0">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm text-foreground py-2 border-b border-border/50 last:border-0 flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
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
          className="text-center mt-14"
        >
          <Button
            size="lg"
            onClick={() => navigate("/book")}
            className="px-8 py-6 font-body text-sm font-medium tracking-wide rounded-full"
          >
            Book Your Event
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;