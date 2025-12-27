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
  {
    id: 6,
    title: "Analytics Widget",
    category: "Dashboard Design",
    description: "Real-time metrics and KPI tracking with beautiful data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 7,
    title: "Mobile Banking",
    category: "App Design",
    description: "Secure and intuitive mobile banking experience with biometric authentication.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    link: "#",
  },
];

export const Carousel3D = () => {
  const [rotation, setRotation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragRotation, setDragRotation] = useState(0);

  const itemCount = projects.length;
  const anglePerItem = 360 / itemCount;
  const radius = 450; // Cylinder radius

  const nextSlide = useCallback(() => {
    setRotation((prev) => prev - anglePerItem);
  }, [anglePerItem]);

  const prevSlide = useCallback(() => {
    setRotation((prev) => prev + anglePerItem);
  }, [anglePerItem]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragRotation(rotation);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = (clientX - startX) * 0.3;
    setRotation(dragRotation + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Snap to nearest card
    const snappedRotation = Math.round(rotation / anglePerItem) * anglePerItem;
    setRotation(snappedRotation);
    
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const getActiveIndex = () => {
    const normalized = (((-rotation % 360) + 360) % 360);
    return Math.round(normalized / anglePerItem) % itemCount;
  };

  const activeIndex = getActiveIndex();

  return (
    <div className="relative w-full py-20">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[1000px] h-[600px] rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-3xl" />
      </div>

      {/* 3D Cylinder Carousel */}
      <div 
        className="relative h-[450px] flex items-center justify-center select-none overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ perspective: '1200px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => {
          handleDragEnd();
          setIsAutoPlaying(true);
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(-8deg)`,
          }}
        >
          <div
            className="relative"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            {projects.map((project, index) => {
              const angle = index * anglePerItem;
              const isActive = index === activeIndex;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={project.id}
                  className="absolute"
                  style={{
                    width: '280px',
                    height: '340px',
                    left: '-140px',
                    top: '-170px',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => {
                    if (isActive) {
                      window.open(project.link, "_blank");
                    } else {
                      const targetRotation = -index * anglePerItem;
                      setRotation(targetRotation);
                    }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className={cn(
                      "w-full h-full rounded-2xl overflow-hidden",
                      "bg-card/95 backdrop-blur-xl",
                      "border border-border/40",
                      "transition-all duration-500 ease-out",
                      "shadow-xl",
                      isActive && "border-primary/50",
                      isHovered && isActive && "scale-105 border-primary"
                    )}
                    style={{
                      boxShadow: isActive 
                        ? '0 30px 60px -15px rgba(0,0,0,0.5), 0 0 40px -10px hsl(var(--primary) / 0.3)' 
                        : '0 20px 40px -15px rgba(0,0,0,0.3)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Project Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-700",
                          isHovered && isActive && "scale-110"
                        )}
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-background/90 backdrop-blur-sm text-foreground border border-border/50">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <h3 className="text-lg font-display font-semibold text-foreground tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div 
                      className={cn(
                        "absolute inset-0 flex flex-col items-center justify-center gap-3",
                        "bg-gradient-to-br from-primary/95 to-primary/85",
                        "transition-opacity duration-400 ease-out",
                        isHovered && isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                      )}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                        <ExternalLink className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-primary-foreground font-display font-semibold">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className={cn(
            "group p-3.5 rounded-full",
            "bg-card/60 backdrop-blur-md",
            "border border-border/40",
            "hover:bg-primary/10 hover:border-primary/50",
            "transition-all duration-300",
            "hover:scale-105 active:scale-95"
          )}
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {/* Progress Indicators */}
        <div className="flex gap-2.5">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setRotation(-index * anglePerItem)}
              className={cn(
                "h-2 rounded-full transition-all duration-500 ease-out",
                index === activeIndex 
                  ? "w-8 bg-primary shadow-lg shadow-primary/50" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className={cn(
            "group p-3.5 rounded-full",
            "bg-card/60 backdrop-blur-md",
            "border border-border/40",
            "hover:bg-primary/10 hover:border-primary/50",
            "transition-all duration-300",
            "hover:scale-105 active:scale-95"
          )}
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
    </div>
  );
};