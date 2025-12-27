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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - clientX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + projects.length) % projects.length);
    
    let adjustedDiff = normalizedDiff;
    if (normalizedDiff > projects.length / 2) {
      adjustedDiff = normalizedDiff - projects.length;
    }

    const isCenter = adjustedDiff === 0;
    const absD = Math.abs(adjustedDiff);
    
    // Smooth, wide spacing like Spline widget carousel
    const translateX = adjustedDiff * 320;
    const translateZ = isCenter ? 80 : -absD * 120;
    const rotateY = adjustedDiff * -12;
    const scale = isCenter ? 1.05 : Math.max(0.7, 0.9 - absD * 0.12);
    const opacity = absD <= 2 ? 1 - absD * 0.3 : 0;
    const zIndex = 10 - absD;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      filter: isCenter ? 'none' : `blur(${absD * 1.5}px)`,
    };
  };

  return (
    <div className="relative w-full py-16">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[500px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl animate-pulse-glow" />
      </div>

      {/* Carousel container */}
      <div 
        className="relative h-[520px] flex items-center justify-center select-none"
        style={{ perspective: '1200px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={(e) => {
          if (isDragging) handleDragEnd(e);
          else setIsAutoPlaying(true);
        }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className="relative w-[340px] h-[440px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const isHovered = hoveredIndex === index && isActive;
            
            return (
              <div
                key={project.id}
                className="absolute inset-0 cursor-pointer"
                style={{
                  ...getCardStyle(index),
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform, opacity, filter',
                }}
                onClick={() => {
                  if (isActive) {
                    window.open(project.link, "_blank");
                  } else {
                    setActiveIndex(index);
                  }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={cn(
                    "relative w-full h-full rounded-3xl overflow-hidden",
                    "bg-gradient-to-b from-card/90 to-card/70",
                    "border border-border/30",
                    "backdrop-blur-xl",
                    "transition-all duration-500 ease-out",
                    isActive && "shadow-2xl shadow-primary/20",
                    isHovered && "border-primary/40 shadow-3xl shadow-primary/30"
                  )}
                  style={{
                    boxShadow: isActive 
                      ? '0 25px 80px -20px rgba(0,0,0,0.5), 0 0 60px -10px hsl(var(--primary) / 0.2)' 
                      : '0 15px 40px -15px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Image with overlay */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isHovered && "scale-110"
                      )}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    
                    {/* Floating category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-background/80 backdrop-blur-md text-foreground border border-border/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-display font-semibold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover CTA overlay */}
                  <div 
                    className={cn(
                      "absolute inset-0 flex flex-col items-center justify-center gap-3",
                      "bg-gradient-to-t from-primary/95 via-primary/90 to-primary/80",
                      "backdrop-blur-sm",
                      "transition-all duration-500 ease-out",
                      isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-primary-foreground font-display font-semibold text-lg">
                      View Project
                    </span>
                    <p className="text-primary-foreground/80 text-sm text-center px-8 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-8 mt-8">
        <button
          onClick={prevSlide}
          className={cn(
            "group p-4 rounded-full",
            "bg-card/50 backdrop-blur-md",
            "border border-border/30",
            "hover:bg-primary/10 hover:border-primary/40",
            "transition-all duration-300 ease-out",
            "hover:scale-105 active:scale-95"
          )}
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {/* Progress dots */}
        <div className="flex gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-500 ease-out",
                index === activeIndex 
                  ? "w-10 bg-primary shadow-lg shadow-primary/40" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className={cn(
            "group p-4 rounded-full",
            "bg-card/50 backdrop-blur-md",
            "border border-border/30",
            "hover:bg-primary/10 hover:border-primary/40",
            "transition-all duration-300 ease-out",
            "hover:scale-105 active:scale-95"
          )}
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
    </div>
  );
};