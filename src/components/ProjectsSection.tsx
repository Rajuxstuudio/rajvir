import { Carousel3D } from "./Carousel3D";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-16 lg:py-20 relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4 lg:mb-6">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 lg:mb-6">
            My Work
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A curated selection of my best work. Click to explore each project in detail.
          </p>
        </div>

        {/* 3D Carousel */}
        <Carousel3D />
      </div>
    </section>
  );
};
