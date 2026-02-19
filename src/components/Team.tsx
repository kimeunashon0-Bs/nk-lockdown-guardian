const team = [
  {
    name: "Nashon Kimeu",
    role: "Co-Founder & Technical Director",
    initials: "NK",
    bio: "With over 10 years in security systems engineering, Nashon leads all technical operations — from system design to installation and quality assurance.",
  },
  {
    name: "Keith Nyakinye",
    role: "Co-Founder & Operations Director",
    initials: "KN",
    bio: "Keith drives business growth, client relationships and day-to-day operations, ensuring every project is delivered on time and to the highest standard.",
  },
];

export default function Team() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h2 className="section-heading text-foreground">Meet Our Team</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((t) => (
            <div key={t.name} className="glass-card glass-card-hover p-8 text-center">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl font-bold text-primary">
                  {t.initials}
                </span>
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">{t.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{t.role}</p>
              <p className="text-sm text-muted-foreground">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
