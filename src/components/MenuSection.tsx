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
    items: ["Tacos, Rice, Beans & a Drink", "Quesadilla, Rice, Beans & a Drink"],
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
    <section className="py-32 bg-background" id="menu">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="h-[3px] w-16 bg-accent mx-auto mb-8" />
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-accent font-semibold mb-5">
            The Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1]">
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
              className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">
                  {cat.label}
                </h3>
                <ul className="space-y-0">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[14px] text-muted-foreground py-2.5 border-b border-border/50 last:border-0 flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
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
          <Button
            size="lg"
            onClick={() => navigate("/book")}
            className="px-10 py-7 font-body text-[13px] font-semibold tracking-[0.15em] uppercase rounded-full"
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
