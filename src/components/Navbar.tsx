import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background border-b border-border"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sista's Cuisine"
            className="w-16 h-16 object-contain"
          />
          <span className="font-display text-xl font-bold text-foreground leading-tight">
            Sista's Cuisine
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Chefs", "Menu", "Stories"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <Button
            size="default"
            onClick={() => navigate("/book")}
            className="font-body text-sm rounded-full px-6"
          >
            Book Now
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 flex flex-col gap-1">
          {["About", "Chefs", "Menu", "Stories"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-body text-sm text-foreground py-3 border-b border-border/50"
            >
              {item}
            </a>
          ))}
          <Button
            size="lg"
            onClick={() => {
              setOpen(false);
              navigate("/book");
            }}
            className="mt-4 font-body text-sm rounded-full"
          >
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;