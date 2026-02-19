import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    location: "Karen, Nairobi",
    stars: 5,
    text: "NK Security installed 12 cameras at my home. The quality is outstanding and I can monitor everything from my phone. Highly recommended!",
  },
  {
    name: "Grace Wanjiku",
    location: "Ruiru",
    stars: 5,
    text: "Professional electric fence installation. The team was punctual, clean, and thorough. I feel much safer now.",
  },
  {
    name: "Peter Otieno",
    location: "Kitengela",
    stars: 5,
    text: "Great alarm system setup with GSM alerts. Their after-sale support is excellent — they respond within hours.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Client Feedback
          </p>
          <h2 className="section-heading text-foreground">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card glass-card-hover p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
