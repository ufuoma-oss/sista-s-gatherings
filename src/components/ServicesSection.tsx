import { motion } from "framer-motion";
import { CalendarDays, Users, UtensilsCrossed, Truck } from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Event Booking",
    description: "Easy booking process for your corporate events, weddings, birthdays, and family gatherings",
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Intimate gatherings and private parties with customized menus tailored to your preferences",
  },
  {
    icon: UtensilsCrossed,
    title: "Custom Menus",
    description: "Personalized menu options to match your event theme and dietary requirements",
  },
  {
    icon: Truck,
    title: "On-Site Service",
    description: "We bring the food to your location with professional setup and friendly service",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/50" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-body font-medium mb-3">
            Our Service
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What We Focus On
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-2xl font-bold text-primary/30 mb-3">
                {i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
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
