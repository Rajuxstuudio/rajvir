import { Palette, Box, Code, Fingerprint, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Crafting user-centric interfaces grounded in usability, logic, and design fundamentals.",
    stat: "12",
    statLabel: "Projects",
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
  const IconUX = services[0].icon;
  const IconProduct = services[1].icon;
  const IconWeb = services[2].icon;
  const IconIdentity = services[3].icon;

  return (
    <section className="min-h-screen flex flex-col justify-center py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4 lg:mb-6">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 lg:mb-6">
            What I Do
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From concept to launch, I deliver end-to-end design solutions that elevate your digital presence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-12 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {/* Large Left Card - UI/UX Design */}
          <div
            className="md:col-span-5 row-span-2 p-6 lg:p-8 rounded-2xl lg:rounded-3xl glass border border-border/30 animate-fade-in-up group hover:border-accent/50 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] transition-all duration-500"
            style={{ animationDelay: "0ms" }}
          >
            {/* Stat */}
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-display font-bold text-foreground mb-1">
                {services[0].stat}
              </div>
              <div className="text-muted-foreground">
                {services[0].statLabel}
              </div>
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <IconUX className="w-7 h-7 text-accent" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
              {services[0].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {services[0].description}
            </p>
          </div>

          {/* Top Right Card - Product Design */}
          <div
            className="md:col-span-7 p-6 rounded-3xl glass border border-border/30 animate-fade-in-up group hover:border-accent/50 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] transition-all duration-500"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <IconProduct className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {services[1].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right - Two cards side by side */}
          <div className="md:col-span-7 grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* Web Development */}
            <div
              className="p-6 rounded-3xl glass border border-border/30 animate-fade-in-up group hover:border-accent/50 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] transition-all duration-500"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <IconWeb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {services[2].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {services[2].description}
              </p>
            </div>

            {/* View All Services Card */}
            <div
              className="p-6 rounded-3xl bg-card/90 border border-border/50 animate-fade-in-up flex flex-col justify-between backdrop-blur-xl group hover:border-accent/50 hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)] transition-all duration-500"
              style={{ animationDelay: "300ms" }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <IconIdentity className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {services[3].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {services[3].description}
                </p>
              </div>

              <Button
                variant="spline"
                className="w-full"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
