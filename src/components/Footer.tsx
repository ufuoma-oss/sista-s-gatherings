const Footer = () => (
  <footer className="py-12 bg-foreground">
    <div className="container mx-auto px-6 text-center">
      <h3 className="font-display text-2xl font-bold text-background mb-2">
        Sista's Cuisine
      </h3>
      <p className="font-body text-sm text-background/60">
        Good food for every gathering
      </p>
      <div className="mt-6 font-body text-xs text-background/40">
        © {new Date().getFullYear()} Sista's Cuisine. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
