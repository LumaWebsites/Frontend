import { useState } from "react";
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const businessTypes = ["Restaurant", "Contractor", "Salon / Spa", "Retail", "Healthcare", "Other"];

const trustSignals = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: MessageCircle, text: "Free consultation" },
  { icon: ShieldCheck, text: "No commitment required" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
    phone: "",
    email: "",
    message: "",
    hearAbout: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks for reaching out! We'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-navy pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Let's build <span className="text-amber">something</span>
          </h1>
          <p className="mt-4 text-primary-foreground/50 max-w-lg text-lg">
            Tell us about your business and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                >
                  <option value="">Select your business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                    placeholder="you@business.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm resize-none"
                  placeholder="Tell us about your business and what you're looking for..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">How did you hear about us?</label>
                <input
                  type="text"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all text-sm"
                  placeholder="Google, referral, social media..."
                />
              </div>

              <Button variant="amber" size="xl" type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </ScrollReveal>

          {/* Trust Signals */}
          <ScrollReveal className="mt-16">
            <div className="grid grid-cols-3 gap-6">
              {trustSignals.map((signal, i) => (
                <div key={i} className="stagger-child text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-amber mb-3">
                    <signal.icon size={18} />
                  </div>
                  <p className="text-xs font-medium text-foreground">{signal.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
