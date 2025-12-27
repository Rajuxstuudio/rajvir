import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-float animation-delay-300" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "100px 100px"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Open to Work</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-100">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient glow-text">Rajvir</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-display animate-fade-in-up animation-delay-200">
          Product UX/UI Designer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
          Crafting purposeful pixels, animations, and flows that tell compelling stories and drive engagement.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a 
              href="https://drive.google.com/file/d/1HtAW7Grsp5yHEIstNiU7uHrGJe699qy3/view" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "80", label: "Happy Clients" },
            { value: "72+", label: "Projects Completed" },
            { value: "72+", label: "Templates Created" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#projects" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
