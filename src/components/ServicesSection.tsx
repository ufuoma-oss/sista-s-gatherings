import { motion } from "framer-motion";
import { CalendarDays, Users, UtensilsCrossed, Truck } from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Event Booking",
    description: "Seamless booking for corporate events, weddings, birthdays, and intimate gatherings.",
  },
  {
    icon: Users,
    number: "02",
    title: "Private Events",
    description: "Exclusive private dining experiences with fully customized menus and personal service.",
  },
  {
    icon: UtensilsCrossed,
    number: "03",
    title: "Custom Menus",
    description: "Tailored menu design to match your vision, dietary needs, and event theme perfectly.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Full-Service Catering",
    description: "Professional on-site setup, service, and cleanup — we handle everything.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-card" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="h-[3px] w-16 bg-accent mb-8" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-body text-[13px] uppercase tracking-[0.3em] text-accent font-semibold mb-5">
                What We Offer
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1]">
                Our Services
              </h2>
            </div>
            <p className="font-body text-muted-foreground text-[15px] max-w-md leading-relaxed">
              From concept to cleanup, we deliver an end-to-end catering experience that exceeds expectations.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-card p-10 lg:p-14 group hover:bg-background transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <service.icon className="w-7 h-7 text-accent" />
                <span className="font-display text-4xl font-bold text-foreground/[0.08]">
                  {service.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
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
