import { PortfolioGallery } from "./PortfolioGallery";

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
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated selection of projects showcasing UI/UX design, identity design, and web development.
          </p>
        </div>

        {/* Portfolio Gallery */}
        <PortfolioGallery />
      </div>
    </section>
  );
};
