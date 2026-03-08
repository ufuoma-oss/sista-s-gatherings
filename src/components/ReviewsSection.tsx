import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jasmine W.",
    event: "Wedding Reception",
    text: "Sista's Cuisine made our wedding unforgettable. The tacos were a massive hit and every single guest asked for the recipe. Professional, on time, and incredibly delicious.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    event: "Corporate Event",
    text: "We hired them for our company holiday party and it was the best decision. The combo plates were perfect and the Koolaid was everyone's favorite. Will definitely book again.",
    rating: 5,
  },
  {
    name: "Keisha M.",
    event: "Birthday Party",
    text: "From start to finish, the experience was seamless. The food was fresh, flavorful, and beautifully presented. My family is still talking about the carne asada!",
    rating: 5,
  },
  {
    name: "David R.",
    event: "Family Reunion",
    text: "I'm vegan and was worried about options. The jackfruit tacos blew my mind — better than any restaurant. The sisters are so warm and genuine. Highly recommend!",
    rating: 5,
  },
  {
    name: "Aaliyah C.",
    event: "Graduation Party",
    text: "They catered my daughter's graduation and everyone was impressed. Great portions, amazing flavors, and the walnut meat was a surprise favorite. Thank you, Sista's!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="h-[3px] w-16 bg-accent mx-auto mb-8" />
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-accent font-semibold mb-5">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1]">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`bg-background rounded-2xl p-8 lg:p-10 relative ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Quote className="w-8 h-8 text-accent/20 mb-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-[15px] text-foreground leading-[1.8] mb-8">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-5">
                <p className="font-display text-base font-bold text-foreground">
                  {review.name}
                </p>
                <p className="font-body text-[13px] text-muted-foreground mt-1">
                  {review.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
