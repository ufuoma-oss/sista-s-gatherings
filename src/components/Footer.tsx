import logo from "@/assets/logo.png";
import { MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-20 bg-charcoal">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div>
          <img src={logo} alt="Sista's Cuisine" className="w-14 h-14 object-contain mb-4" />
          <p className="font-display text-xl font-bold text-primary-foreground mb-2">
            Sista's Cuisine
          </p>
          <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
            Good food for every gathering. Fresh, homestyle meals prepared with love.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-xs uppercase tracking-widest text-primary-foreground/40 mb-6">
            Contact
          </h4>
          <div className="space-y-4">
            <a href="tel:+18444092116" className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +1 (844) 409-2116
            </a>
            <div className="flex items-start gap-3 font-body text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              355 S. Grand Ave Suite 2450,<br />Los Angeles, CA 90071
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-xs uppercase tracking-widest text-primary-foreground/40 mb-6">
            Follow Us
          </h4>
          <div className="space-y-4">
            <a
              href="https://www.instagram.com/sistas.cuisines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@sistas.cuisines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.97a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.38z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8">
        <p className="font-body text-xs text-primary-foreground/30 text-center">
          © {new Date().getFullYear()} Sista's Cuisine. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
