import { MapPin } from "lucide-react";

const areas = [
  "Nairobi CBD", "Westlands", "Kilimani", "Karen", "Lang'ata",
  "Ruaka", "Ruiru", "Thika", "Kitengela", "Syokimau", "Ngong",
];

export default function AreasServed() {
  return (
    <section id="areas" className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
          Coverage
        </p>
        <h2 className="section-heading text-foreground mb-10">Areas We Serve</h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((a) => (
            <span
              key={a}
              className="glass-card px-5 py-2.5 text-sm text-foreground flex items-center gap-2 font-medium"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
