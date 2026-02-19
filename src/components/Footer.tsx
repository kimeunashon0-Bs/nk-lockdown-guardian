import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                NK<span className="text-primary">Security</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional security solutions for homes, offices and commercial
              properties across Nairobi &amp; surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Services", "Packages", "Projects", "Testimonials", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +254 700 000 000
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                info@nksecurity.co.ke
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NK Security Solutions Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
