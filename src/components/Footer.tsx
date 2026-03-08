import logo from "@/assets/logo.png";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="py-24 bg-foreground">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Sista's Cuisine" className="w-16 h-16 object-contain" />
            <span className="font-display text-2xl font-bold text-background">
              Sista's Cuisine
            </span>
          </div>
          <p className="font-body text-[15px] text-background/50 leading-relaxed max-w-sm">
            Elevated homestyle cuisine for every gathering. Fresh, bold flavors
            crafted by two sisters in the heart of Los Angeles.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body text-[11px] uppercase tracking-[0.25em] text-background/30 font-semibold mb-8">
            Contact
          </h4>
          <div className="space-y-5">
            <a href="tel:+18444092116" className="flex items-center gap-3 font-body text-[14px] text-background/60 hover:text-background transition-colors">
              <Phone className="w-4 h-4 text-accent" />
              +1 (844) 409-2116
            </a>
            <div className="flex items-start gap-3 font-body text-[14px] text-background/60">
              <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              355 S. Grand Ave Suite 2450,<br />Los Angeles, CA 90071
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-body text-[11px] uppercase tracking-[0.25em] text-background/30 font-semibold mb-8">
            Follow Us
          </h4>
          <div className="space-y-4">
            <a
              href="https://www.instagram.com/sistas.cuisines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-[14px] text-background/60 hover:text-accent transition-colors group"
            >
              Instagram
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.tiktok.com/@sistas.cuisines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-[14px] text-background/60 hover:text-accent transition-colors group"
            >
              TikTok
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-[12px] text-background/25">
          © {new Date().getFullYear()} Sista's Cuisine. All rights reserved.
        </p>
        <p className="font-body text-[12px] text-background/25">
          Los Angeles, California
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
