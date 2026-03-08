import { motion } from "framer-motion";
import { CalendarDays, Users, UtensilsCrossed, Truck } from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Event Booking",
    description:
      "Seamless booking for corporate events, weddings, birthdays, and intimate gatherings.",
  },
  {
    icon: Users,
    title: "Private Events",
    description:
      "Exclusive private dining experiences with fully customized menus and personal service.",
  },
  {
    icon: UtensilsCrossed,
    title: "Custom Menus",
    description:
      "Tailored menu design to match your vision, dietary needs, and event theme perfectly.",
  },
  {
    icon: Truck,
    title: "Full-Service Catering",
    description:
      "Professional on-site setup, service, and cleanup — we handle everything.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15]">
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
              className="bg-background rounded-2xl p-8 hover:border-primary/20 border border-transparent transition-colors"
            >
              <service.icon className="w-6 h-6 text-primary mb-5" />
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-foreground leading-relaxed">
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