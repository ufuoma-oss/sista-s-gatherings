import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { menuData } from "@/components/MenuSection";
import { ArrowLeft, ArrowRight, CalendarDays, Users, UtensilsCrossed, Check, PartyPopper, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const eventTypes = [
  "Birthday Party",
  "Wedding",
  "Corporate Event",
  "Family Gathering",
  "Private Dinner",
  "Graduation",
  "Holiday Party",
  "Other",
];

const guestCounts = ["10–25", "25–50", "50–100", "100–200", "200+"];

const steps = ["Date", "Event", "Guests", "Menu", "Confirm"];

const BookingPage = () => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState<Date | undefined>();
  const [eventType, setEventType] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const canNext = () => {
    if (step === 0) return !!date;
    if (step === 1) return !!eventType;
    if (step === 2) return !!guestCount;
    if (step === 3) return selectedItems.length > 0;
    if (step === 4) return name && email && phone;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a form and submit it (Netlify requires actual form submission, not fetch)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/success.html';
    form.style.display = 'none';

    const fields: Record<string, string> = {
      'form-name': 'booking',
      '_next': '/success.html',
      name: name,
      email: email,
      phone: phone,
      date: date ? format(date, "MMMM do, yyyy") : "",
      eventType: eventType,
      guestCount: guestCount,
      menuItems: selectedItems.join(", "),
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md px-6"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <PartyPopper className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">
              Booking Received!
            </h2>
            <p className="font-body text-muted-foreground mb-2">
              Thank you, {name}! We'll reach out to confirm your{" "}
              {eventType.toLowerCase()} on{" "}
              {date ? format(date, "MMMM do, yyyy") : ""}.
            </p>
            <p className="font-body text-sm text-muted-foreground mb-8">
              {guestCount} guests · {selectedItems.length} items selected
            </p>
            <Button variant="hero" onClick={() => window.location.href = "/"}>
              Back to Home
            </Button>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-6 py-12 max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-medium transition-colors",
                    i <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-8 h-0.5 transition-colors",
                      i < step ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form wrapper for Netlify */}
          <form 
            name="booking" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            hidden
          >
            <input type="hidden" name="form-name" value="booking" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="tel" name="phone" />
            <input type="text" name="date" />
            <input type="text" name="eventType" />
            <input type="text" name="guestCount" />
            <input type="text" name="menuItems" />
            <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>
          </form>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 0: Date */}
              {step === 0 && (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CalendarDays className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
                    Pick a Date
                  </h2>
                  <p className="font-body text-muted-foreground mb-8">
                    When is your event?
                  </p>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      className="rounded-lg border border-border bg-card p-4 pointer-events-auto"
                    />
                  </div>
                  {date && (
                    <p className="mt-4 font-body text-sm text-primary font-medium">
                      {format(date, "EEEE, MMMM do, yyyy")}
                    </p>
                  )}
                </div>
              )}

              {/* Step 1: Event Type */}
              {step === 1 && (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <PartyPopper className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
                    What's the Occasion?
                  </h2>
                  <p className="font-body text-muted-foreground mb-8">
                    Select your event type
                  </p>
                  <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                    {eventTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setEventType(type)}
                        className={cn(
                          "py-3 px-4 rounded-lg font-body text-sm border transition-all",
                          eventType === type
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card text-foreground border-border hover:border-primary/50"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Guest Count */}
              {step === 2 && (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
                    How Many Guests?
                  </h2>
                  <p className="font-body text-muted-foreground mb-8">
                    Approximate number of people
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {guestCounts.map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setGuestCount(count)}
                        className={cn(
                          "py-3 px-6 rounded-lg font-body text-sm border transition-all",
                          guestCount === count
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card text-foreground border-border hover:border-primary/50"
                        )}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Menu Selection */}
              {step === 3 && (
                <div>
                  <div className="text-center mb-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <UtensilsCrossed className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
                      Choose Your Menu
                    </h2>
                    <p className="font-body text-muted-foreground">
                      Select items you'd like for your event
                    </p>
                  </div>

                  <div className="space-y-6">
                    {Object.values(menuData).map((cat) => (
                      <div key={cat.label}>
                        <h3 className="font-display text-sm uppercase tracking-widest text-primary font-bold mb-3">
                          {cat.label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => toggleItem(item)}
                              className={cn(
                                "py-2 px-4 rounded-full font-body text-sm border transition-all",
                                selectedItems.includes(item)
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-card text-foreground border-border hover:border-primary/50"
                              )}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedItems.length > 0 && (
                    <p className="text-center mt-6 font-body text-sm text-primary font-medium">
                      {selectedItems.length} item{selectedItems.length > 1 ? "s" : ""} selected
                    </p>
                  )}
                </div>
              )}

              {/* Step 4: Contact Info */}
              {step === 4 && (
                <div className="text-center">
                  <h2 className="font-display text-3xl font-extrabold text-foreground mb-2">
                    Almost Done!
                  </h2>
                  <p className="font-body text-muted-foreground mb-8">
                    How can we reach you?
                  </p>
                  <div className="max-w-sm mx-auto space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full py-3 px-4 rounded-lg border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {/* Summary */}
                  <div className="mt-8 bg-secondary/50 rounded-lg p-6 text-left max-w-sm mx-auto">
                    <h4 className="font-display text-sm uppercase tracking-wider text-primary font-bold mb-3">
                      Booking Summary
                    </h4>
                    <div className="space-y-2 font-body text-sm text-foreground">
                      <p>📅 {date ? format(date, "MMMM do, yyyy") : ""}</p>
                      <p>🎉 {eventType}</p>
                      <p>👥 {guestCount} guests</p>
                      <p>🍽️ {selectedItems.length} menu items</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <Button
              variant="ghost"
              type="button"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className="font-body"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {step < 4 ? (
              <Button
                variant="hero"
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                variant="hero"
                type="submit"
                form="booking-form"
                disabled={!canNext() || isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <Check className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
