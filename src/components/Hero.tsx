import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "254700000000";
const WHATSAPP_MSG = encodeURIComponent("Hello, I'm interested in your security services.");

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={heroBg}
        alt="Security surveillance at night"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Glass card */}
      <div className="relative z-10 glass-card p-8 md:p-14 max-w-2xl mx-4 text-center">
        <div className="inline-flex items-center gap-2 text-primary mb-4">
          <ShieldCheck className="h-6 w-6" />
          <span className="text-sm font-heading font-semibold tracking-widest uppercase">
            Trusted Protection
          </span>
        </div>

        <h1 className="section-heading text-foreground mb-2">
          NK Security Solutions Ltd
        </h1>
        <p className="text-2xl md:text-3xl font-heading font-bold text-primary text-glow mb-4">
          Lock It Down.
        </p>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Professional CCTV, Electric Fence &amp; Alarm Installation in Nairobi
          &amp; Surrounding Areas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#quote">
            <Button variant="hero" size="lg">
              Get Free Quote
            </Button>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="heroOutline" size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
