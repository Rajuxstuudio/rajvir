import { useState, useEffect, useCallback } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string; // Google Prime color for background
  link: string;
}

// Google Prime Colors
const googleColors = [
  "linear-gradient(135deg, #4285F4 0%, #2B5CBC 100%)", // Blue
  "linear-gradient(135deg, #EA4335 0%, #C5221F 100%)", // Red
  "linear-gradient(135deg, #FBBC04 0%, #E8A400 100%)", // Yellow
  "linear-gradient(135deg, #34A853 0%, #1E8E3E 100%)", // Green
  "linear-gradient(135deg, #4285F4 0%, #34A853 100%)", // Blue to Green
  "linear-gradient(135deg, #EA4335 0%, #FBBC04 100%)", // Red to Yellow
  "linear-gradient(135deg, #34A853 0%, #4285F4 100%)", // Green to Blue
];

const projects: Project[] = [
  {
    id: 1,
    title: "Amrutam Ayurveda",
    category: "UI/UX Design",
    description: "A holistic wellness platform blending ancient Ayurvedic wisdom with modern digital experiences.",
    color: googleColors[0],
    link: "#",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Product Design",
    description: "Intuitive financial analytics dashboard with real-time data visualization and insights.",
    color: googleColors[1],
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce App",
    category: "Mobile Design",
    description: "Seamless shopping experience with personalized recommendations and one-tap checkout.",
    color: googleColors[2],
    link: "#",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Identity Design",
    description: "Complete brand overhaul including logo, packaging, and visual identity system.",
    color: googleColors[3],
    link: "#",
  },
  {
    id: 5,
    title: "SaaS Platform",
    category: "Web Development",
    description: "Scalable enterprise platform with robust authentication and analytics.",
    color: googleColors[4],
    link: "#",
  },
  {
    id: 6,
    title: "Analytics Widget",
    category: "Dashboard Design",
    description: "Real-time metrics and KPI tracking with beautiful data visualization.",
    color: googleColors[5],
    link: "#",
  },
  {
    id: 7,
    title: "Mobile Banking",
    category: "App Design",
    description: "Secure and intuitive mobile banking experience with biometric authentication.",
    color: googleColors[6],
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
  const radius = 380;

  const nextSlide = useCallback(() => {
    setRotation((prev) => prev - anglePerItem);
  }, [anglePerItem]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 3000);
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
    
    const snappedRotation = Math.round(rotation / anglePerItem) * anglePerItem;
    setRotation(snappedRotation);
    
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const getActiveIndex = () => {
    const normalized = (((-rotation % 360) + 360) % 360);
    return Math.round(normalized / anglePerItem) % itemCount;
  };

  const activeIndex = getActiveIndex();
  const isAnyHovered = hoveredIndex !== null;

  return (
    <div className="relative w-full py-16">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[900px] h-[500px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
      </div>

      {/* 3D Carousel */}
      <div 
        className="relative h-[500px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
        style={{ perspective: '1400px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => {
          handleDragEnd();
          setIsAutoPlaying(true);
          setHoveredIndex(null);
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
            transform: `rotateX(-5deg)`,
          }}
        >
          <div
            className="relative"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {projects.map((project, index) => {
              const angle = index * anglePerItem;
              const isActive = index === activeIndex;
              const isHovered = hoveredIndex === index;
              
              // Calculate card position relative to front
              const relativeAngle = ((angle + rotation) % 360 + 360) % 360;
              const isBackSide = relativeAngle > 90 && relativeAngle < 270;
              const baseOpacity = isBackSide ? 0.4 : 1;
              const scale = isBackSide ? 0.85 : 1;
              
              // Apply blur to non-hovered cards when any card is hovered
              const shouldBlur = isAnyHovered && !isHovered;
              const opacity = shouldBlur ? 0.3 : baseOpacity;
              
              return (
                <div
                  key={project.id}
                  className="absolute"
                  style={{
                    width: '260px',
                    height: '340px',
                    left: '-130px',
                    top: '-170px',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                    opacity,
                    filter: shouldBlur ? 'blur(8px)' : 'blur(0px)',
                    transition: isDragging 
                      ? 'opacity 0.2s, filter 0.3s' 
                      : 'opacity 0.5s, filter 0.3s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
                  {/* 3D Glass Card */}
                  <div 
                    className={cn(
                      "w-full h-full rounded-3xl overflow-hidden",
                      "transition-all duration-500 ease-out",
                      isActive && "z-10",
                      isHovered && "scale-105"
                    )}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: isActive 
                        ? '1px solid hsl(var(--primary) / 0.5)' 
                        : '1px solid rgba(255,255,255,0.15)',
                      boxShadow: isActive 
                        ? `
                          0 8px 32px rgba(0,0,0,0.4),
                          0 0 60px -10px hsl(var(--primary) / 0.4),
                          inset 0 1px 0 rgba(255,255,255,0.2),
                          inset 0 -1px 0 rgba(0,0,0,0.1)
                        ` 
                        : `
                          0 8px 32px rgba(0,0,0,0.3),
                          inset 0 1px 0 rgba(255,255,255,0.15),
                          inset 0 -1px 0 rgba(0,0,0,0.1)
                        `,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Glass reflection overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, transparent 100%)',
                        borderRadius: 'inherit',
                      }}
                    />

                    {/* Project Color Background with Icon */}
                    <div 
                      className="relative h-44 overflow-hidden flex items-center justify-center"
                      style={{ background: project.color }}
                    >
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/30 rounded-lg rotate-45" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full" />
                      </div>
                      
                      {/* Category initial as large background text */}
                      <span className="text-6xl font-display font-bold text-white/30 select-none">
                        {project.category.charAt(0)}
                      </span>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span 
                          className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full text-white"
                          style={{
                            background: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.3)',
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content - visible when not hovered */}
                    <div 
                      className={cn(
                        "p-5 space-y-2 relative z-10 transition-all duration-300",
                        isHovered ? "opacity-0 blur-sm" : "opacity-100 blur-0"
                      )}
                    >
                      <h3 className="text-lg font-display font-semibold text-white tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Hover Overlay - Full Cover with Blur */}
                    <div 
                      className={cn(
                        "absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl",
                        "transition-all duration-400 ease-out",
                        isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                      )}
                      style={{
                        background: 'rgba(0, 0, 0, 0.85)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: project.color,
                          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        }}
                      >
                        <ExternalLink className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white font-display font-bold text-xl">
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
    </div>
  );
};