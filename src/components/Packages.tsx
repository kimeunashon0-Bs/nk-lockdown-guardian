import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic Home",
    color: "text-green-400",
    price: "KES 25,000",
    features: ["4 HD Cameras", "DVR System", "Mobile Viewing Setup", "Professional Installation", "6 Month Warranty"],
  },
  {
    name: "Standard",
    color: "text-primary",
    price: "KES 55,000",
    popular: true,
    features: ["8 IP Cameras", "Remote Monitoring", "Motion Alerts", "Night Vision", "1 Year Warranty"],
  },
  {
    name: "Premium",
    color: "text-red-400",
    price: "KES 120,000",
    features: ["16 HD Cameras", "Electric Fence Integration", "Alarm System Setup", "Priority Support", "2 Year Warranty"],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Pricing
          </p>
          <h2 className="section-heading text-foreground">Security Packages</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass-card glass-card-hover p-8 flex flex-col ${
                pkg.popular ? "ring-2 ring-primary relative" : ""
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`font-heading text-xl font-bold mb-1 ${pkg.color}`}>
                {pkg.name}
              </h3>
              <p className="text-2xl font-heading font-bold text-foreground mb-1">
                {pkg.price}
              </p>
              <p className="text-xs text-muted-foreground mb-6">Starting from</p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#quote">
                <Button variant={pkg.popular ? "hero" : "heroOutline"} className="w-full">
                  Request This Package
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
