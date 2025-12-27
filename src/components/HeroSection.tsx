import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { label: "Experience", value: "20+" },
  { label: "Clients", value: "80" },
  { label: "Projects", value: "72+" },
  { label: "Templates", value: "72+" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Central light beam effect - Huly style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main vertical light beam */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-[60%] animate-light-beam"
          style={{
            background: 'linear-gradient(180deg, hsl(200 100% 55% / 0.9) 0%, hsl(200 100% 60% / 0.5) 40%, hsl(200 100% 65% / 0.1) 80%, transparent 100%)',
            boxShadow: '0 0 60px 20px hsl(200 100% 55% / 0.3), 0 0 120px 40px hsl(200 100% 55% / 0.15)',
          }}
        />
        
        {/* Glow orb at beam source */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-40 h-40 rounded-full animate-light-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(200 100% 55% / 0.4) 0%, hsl(200 100% 55% / 0.1) 40%, transparent 70%)',
          }}
        />
        
        {/* Secondary glow spread */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center top, hsl(200 100% 55% / 0.08) 0%, hsl(200 100% 60% / 0.03) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "48px 48px"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Open to work</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
          <span className="text-foreground">Product</span>
          <br />
          <span className="text-gradient">UX/UI Designer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in-up animation-delay-200 leading-relaxed">
          Crafting purposeful pixels, animations, and flows that tell compelling stories and drive engagement. Focused on usability, logic, and design fundamentals.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up animation-delay-300 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">India</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">Figma Expert</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
          <Button 
            variant="outline" 
            size="xl" 
            className="rounded-full border-border/60 hover:border-primary/50 hover:bg-secondary/50 group px-8"
            asChild
          >
            <a href="#projects" className="flex items-center gap-3">
              View Portfolio
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
