import { Carousel3D } from "./Carousel3D";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A curated selection of my best work. Click to explore each project in detail.
          </p>
        </div>

        {/* 3D Carousel */}
        <Carousel3D />
      </div>
    </section>
  );
};
