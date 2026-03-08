import logo from "@/assets/logo.png";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="py-20 bg-foreground">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid md:grid-cols-4 gap-10 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Sista's Cuisine" className="w-14 h-14 object-contain" />
            <span className="font-display text-xl text-background">
              Sista's Cuisine
            </span>
          </div>
          <p className="font-body text-sm text-background/50 leading-relaxed max-w-sm">
            Fresh, homestyle meals prepared for parties, meetings, and special
            events. Two sisters, one unforgettable experience.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-background/30 font-semibold mb-6">
            Contact
          </h4>
          <div className="space-y-4">
            <a
              href="tel:+18444092116"
              className="flex items-center gap-2.5 font-body text-sm text-background/60 hover:text-background transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              +1 (844) 409-2116
            </a>
            <div className="flex items-start gap-2.5 font-body text-sm text-background/60">
              <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
              355 S. Grand Ave Suite 2450,
              <br />
              Los Angeles, CA 90071
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-background/30 font-semibold mb-6">
            Follow Us
          </h4>
          <div className="space-y-3">
            <a
              href="https://www.instagram.com/sistas.cuisines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-sm text-background/60 hover:text-primary transition-colors group"
            >
              Instagram
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.tiktok.com/@sistas.cuisines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-sm text-background/60 hover:text-primary transition-colors group"
            >
              TikTok
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-background/25">
          © {new Date().getFullYear()} Sista's Cuisine. All rights reserved.
        </p>
        <p className="font-body text-xs text-background/25">
          Los Angeles, California
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
