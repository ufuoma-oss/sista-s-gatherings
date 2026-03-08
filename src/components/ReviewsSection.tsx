import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-[1.15]">
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
              className="bg-background rounded-2xl p-7"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-foreground font-semibold leading-[1.7] mb-6">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-body text-sm font-medium text-foreground">
                  {review.name}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
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
