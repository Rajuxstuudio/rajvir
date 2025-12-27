import { Palette, Box, Code, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting user-centric interfaces grounded in usability, logic, and design fundamentals.",
  },
  {
    icon: Box,
    title: "Product Design",
    description: "Designing functional, research-driven digital products that solve real user problems.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive websites using CMS, JavaScript, Angular, and Java.",
  },
  {
    icon: Fingerprint,
    title: "Identity Design",
    description: "Creating cohesive brand identities through logo design, packaging, and visual storytelling.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From concept to launch, I deliver end-to-end design solutions that elevate your digital presence.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-2xl bg-gradient-card border border-border/50",
                "hover:border-primary/50 hover:glow transition-all duration-500",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
