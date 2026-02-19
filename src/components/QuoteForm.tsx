import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "254799528426";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    propertyType: "",
    service: "",
    budget: "",
    message: "",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const setSelect = (key: string) => (val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    const msg = `*New Quote Request*%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ALocation: ${encodeURIComponent(form.location)}%0AProperty: ${encodeURIComponent(form.propertyType)}%0AService: ${encodeURIComponent(form.service)}%0ABudget: ${encodeURIComponent(form.budget)}%0AMessage: ${encodeURIComponent(form.message)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="quote" className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Get Started
          </p>
          <h2 className="section-heading text-foreground">Request a Free Quote</h2>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Full Name *"
              value={form.name}
              onChange={set("name")}
              required
              maxLength={100}
              className="bg-input/50 border-border"
            />
            <Input
              placeholder="Phone Number *"
              value={form.phone}
              onChange={set("phone")}
              required
              maxLength={20}
              className="bg-input/50 border-border"
            />
          </div>

          <Input
            placeholder="Location (e.g. Ruiru, Karen)"
            value={form.location}
            onChange={set("location")}
            maxLength={100}
            className="bg-input/50 border-border"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Select onValueChange={setSelect("propertyType")}>
              <SelectTrigger className="bg-input/50 border-border">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="estate">Estate / Gated Community</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={setSelect("service")}>
              <SelectTrigger className="bg-input/50 border-border">
                <SelectValue placeholder="Service Required" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cctv">CCTV Installation</SelectItem>
                <SelectItem value="fence">Electric Fencing</SelectItem>
                <SelectItem value="alarm">Alarm System</SelectItem>
                <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                <SelectItem value="full">Full Security Package</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select onValueChange={setSelect("budget")}>
            <SelectTrigger className="bg-input/50 border-border">
              <SelectValue placeholder="Budget Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-30k">Under KES 30,000</SelectItem>
              <SelectItem value="30k-60k">KES 30,000 – 60,000</SelectItem>
              <SelectItem value="60k-100k">KES 60,000 – 100,000</SelectItem>
              <SelectItem value="100k-plus">KES 100,000+</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Tell us more about your security needs..."
            value={form.message}
            onChange={set("message")}
            maxLength={1000}
            rows={4}
            className="bg-input/50 border-border"
          />

          <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
            <Send className="h-5 w-5" /> Send to WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}
