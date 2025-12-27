import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Amrutam Ayurveda",
    category: "UI/UX Design",
    description: "A holistic wellness platform blending ancient Ayurvedic wisdom with modern digital experiences.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Product Design",
    description: "Intuitive financial analytics dashboard with real-time data visualization and insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce App",
    category: "Mobile Design",
    description: "Seamless shopping experience with personalized recommendations and one-tap checkout.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Identity Design",
    description: "Complete brand overhaul including logo, packaging, and visual identity system.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "SaaS Platform",
    category: "Web Development",
    description: "Scalable enterprise platform with robust authentication and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
  },
];

export const Carousel3D = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + projects.length) % projects.length);
    
    let adjustedDiff = normalizedDiff;
    if (normalizedDiff > projects.length / 2) {
      adjustedDiff = normalizedDiff - projects.length;
    }

    const translateX = adjustedDiff * 280;
    const translateZ = Math.abs(adjustedDiff) === 0 ? 100 : -Math.abs(adjustedDiff) * 100;
    const rotateY = adjustedDiff * -15;
    const scale = Math.abs(adjustedDiff) === 0 ? 1 : 0.85 - Math.abs(adjustedDiff) * 0.1;
    const opacity = Math.abs(adjustedDiff) <= 2 ? 1 - Math.abs(adjustedDiff) * 0.25 : 0;
    const zIndex = 10 - Math.abs(adjustedDiff);

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <div className="relative w-full py-20">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      </div>

      {/* Carousel container */}
      <div 
        className="relative h-[500px] perspective-1000 flex items-center justify-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="preserve-3d relative w-[320px] h-[420px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "absolute w-[320px] h-[420px] transition-all duration-700 ease-out cursor-pointer",
                index === activeIndex && "cursor-pointer"
              )}
              style={getCardStyle(index)}
              onClick={() => {
                if (index === activeIndex) {
                  window.open(project.link, "_blank");
                } else {
                  setActiveIndex(index);
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={cn(
                "relative w-full h-full rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-2xl transition-all duration-500",
                index === activeIndex && hoveredIndex === index && "border-primary/50 glow scale-105"
              )}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className={cn(
                  "absolute inset-0 bg-primary/90 flex flex-col items-center justify-center gap-4 transition-opacity duration-300",
                  index === activeIndex && hoveredIndex === index ? "opacity-100" : "opacity-0"
                )}>
                  <ExternalLink className="w-10 h-10 text-primary-foreground" />
                  <span className="text-primary-foreground font-display font-semibold text-lg">
                    View Project
                  </span>
                  <p className="text-primary-foreground/80 text-sm text-center px-6">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full glass hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex 
                  ? "w-8 bg-primary" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full glass hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </div>
  );
};
