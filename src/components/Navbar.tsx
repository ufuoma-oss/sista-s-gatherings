import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sista's Cuisine" className="w-10 h-10 object-contain" />
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            Sista's Cuisine
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#services" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#menu" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Menu</a>
          <a href="#stories" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Stories</a>
          <Button variant="default" size="sm" onClick={() => navigate("/book")} className="font-display text-xs tracking-wide uppercase">
            Book Now
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 flex flex-col gap-4">
          <a href="#about" onClick={() => setOpen(false)} className="font-body text-muted-foreground py-2">About</a>
          <a href="#services" onClick={() => setOpen(false)} className="font-body text-muted-foreground py-2">Services</a>
          <a href="#menu" onClick={() => setOpen(false)} className="font-body text-muted-foreground py-2">Menu</a>
          <a href="#stories" onClick={() => setOpen(false)} className="font-body text-muted-foreground py-2">Stories</a>
          <Button variant="default" size="sm" onClick={() => { setOpen(false); navigate("/book"); }} className="font-display text-xs tracking-wide uppercase">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
