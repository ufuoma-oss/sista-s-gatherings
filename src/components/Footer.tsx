import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-12 bg-charcoal">
    <div className="container mx-auto px-6 text-center">
      <img src={logo} alt="Sista's Cuisine" className="w-16 h-16 mx-auto mb-4" />
      <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
        Sista's Cuisine
      </h3>
      <p className="font-body text-sm text-primary-foreground/60">
        Good food for every gathering
      </p>
      <div className="mt-6 font-body text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Sista's Cuisine. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
