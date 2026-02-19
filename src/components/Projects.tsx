import { MapPin } from "lucide-react";

const projects = [
  { title: "Residential CCTV – 16 Cameras", location: "Karen, Nairobi", category: "Residential" },
  { title: "Electric Fence – Perimeter Security", location: "Ruiru", category: "Electric Fence" },
  { title: "Commercial Surveillance System", location: "Westlands, Nairobi", category: "Commercial" },
  { title: "Alarm & CCTV Combo Install", location: "Kitengela", category: "Alarm" },
  { title: "IP Camera System – Office Block", location: "Kilimani, Nairobi", category: "Commercial" },
  { title: "Residential Fence + CCTV", location: "Syokimau", category: "Residential" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Our Work
          </p>
          <h2 className="section-heading text-foreground">Past Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover overflow-hidden group"
            >
              <div className="h-48 bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-heading">{p.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {p.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
