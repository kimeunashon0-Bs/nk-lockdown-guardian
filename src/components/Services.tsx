import { Camera, Zap, BellRing, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Camera,
    title: "CCTV Installation",
    features: ["HD/IP Cameras", "Remote Monitoring", "DVR/NVR Setup", "Residential & Commercial"],
  },
  {
    icon: Zap,
    title: "Electric Fencing",
    features: ["Perimeter Protection", "Anti-Climb System", "Alarm Integration", "High Voltage Deterrent"],
  },
  {
    icon: BellRing,
    title: "Alarm Systems",
    features: ["Motion Sensors", "Panic Buttons", "GSM Alerts", "24/7 Monitoring"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    features: ["Repairs", "System Upgrades", "Troubleshooting", "Annual Contracts"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            What We Do
          </p>
          <h2 className="section-heading text-foreground">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card glass-card-hover p-6 flex flex-col items-start"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {s.title}
              </h3>
              <ul className="space-y-1.5 mb-6 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#quote">
                <Button variant="heroOutline" size="sm">
                  Request Quote
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
