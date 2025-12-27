import { Carousel3D } from "./Carousel3D";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "48px 48px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header - Huly style */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 tracking-tight">
            Unmatched productivity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated selection of projects showcasing process, project, time, and knowledge management.
          </p>
        </div>

        {/* 3D Carousel */}
        <Carousel3D />
      </div>
    </section>
  );
};