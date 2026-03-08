import { motion } from "framer-motion";
import { CalendarDays, Users, UtensilsCrossed, Truck } from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Event Booking",
    description: "Easy booking for corporate events, weddings, birthdays, and family gatherings",
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Intimate gatherings with customized menus tailored to your preferences",
  },
  {
    icon: UtensilsCrossed,
    title: "Custom Menus",
    description: "Personalized options to match your event theme and dietary requirements",
  },
  {
    icon: Truck,
    title: "On-Site Service",
    description: "Professional setup and friendly service at your location",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-28 bg-secondary/30" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-medium mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background border border-border p-8 hover:border-primary/30 transition-colors group"
            >
              <service.icon className="w-5 h-5 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-base font-semibold text-foreground mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
