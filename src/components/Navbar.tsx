import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold text-primary-foreground tracking-wide">
          Sista's Cuisine
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a>
          <a href="#services" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</a>
          <a href="#menu" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Menu</a>
          <Button variant="hero" size="sm" onClick={() => navigate("/book")}>
            Book Now
          </Button>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          <a href="#about" onClick={() => setOpen(false)} className="font-body text-primary-foreground/70 py-2">About</a>
          <a href="#services" onClick={() => setOpen(false)} className="font-body text-primary-foreground/70 py-2">Services</a>
          <a href="#menu" onClick={() => setOpen(false)} className="font-body text-primary-foreground/70 py-2">Menu</a>
          <Button variant="hero" size="sm" onClick={() => { setOpen(false); navigate("/book"); }}>
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
