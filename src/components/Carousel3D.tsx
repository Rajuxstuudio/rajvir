import { useState, useEffect, useCallback } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string; // Google Prime color for background
  link: string;
  isViewAll?: boolean;
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
    title: "Utility Plus",
    category: "SaaS (Mobile/Tablet/Web Application)",
    description: "Help agencies manage billing, track records, and streamline user data efficiently. Improved the existing UX for better usability.",
    color: googleColors[0],
    link: "#",
  },
  {
    id: 2,
    title: "CloudGavel",
    category: "SaaS (Mobile/Web Application)",
    description: "An innovative eWarrant solution that streamlines the warrant approval process, enabling law enforcement efficiency.",
    color: googleColors[1],
    link: "#",
  },
  {
    id: 3,
    title: "Echelon Constructors",
    category: "ERP (Web App)",
    description: "Construction Project Management Software designed to handle project planning, scheduling, and resource management.",
    color: googleColors[2],
    link: "#",
  },
  {
    id: 4,
    title: "Captable",
    category: "Fintech (Web App)",
    description: "Help agencies manage billing, track records, and streamline user data efficiently. Improved the existing UX.",
    color: googleColors[3],
    link: "#",
  },
  {
    id: 5,
    title: "Bumper Mandi",
    category: "AgriTech (Mobile/Web Application)",
    description: "A digital mandi app that helps farmers sell grain securely and transparently. Simplifies transactions, ensures fair pricing, verified buyers, and real-time updates.",
    color: googleColors[4],
    link: "#",
  },
  {
    id: 6,
    title: "React Portfolio Website",
    category: "Web Development",
    description: "A modern, responsive portfolio website using React with smooth navigation, reusable components, and a clean UI. Maintained on GitHub with organized commits and clear documentation.",
    color: googleColors[5],
    link: "#",
  },
  {
    id: 7,
    title: "View All Projects",
    category: "Projects",
    description: "Explore my complete collection of design and development work across various industries and platforms.",
    color: googleColors[6],
    link: "/projects",
    isViewAll: true,
  },
];

export const Carousel3D = () => {
  const navigate = useNavigate();
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
                      if (project.isViewAll) {
                        navigate(project.link);
                      } else {
                        window.open(project.link, "_blank");
                      }
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
                      background: 'hsl(var(--card))',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: isActive 
                        ? '1px solid hsl(var(--primary) / 0.5)' 
                        : '1px solid hsl(var(--border))',
                      boxShadow: isActive 
                        ? `
                          0 8px 32px hsl(var(--foreground) / 0.1),
                          0 0 60px -10px hsl(var(--primary) / 0.3)
                        ` 
                        : `
                          0 8px 32px hsl(var(--foreground) / 0.08)
                        `,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Glass reflection overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--foreground) / 0.03) 0%, transparent 50%, transparent 100%)',
                        borderRadius: 'inherit',
                      }}
                    />

                    {/* Project Color Background with Icon */}
                    {project.isViewAll ? (
                      <div className="relative h-44 overflow-hidden flex items-center justify-center bg-muted border-b border-border">
                        <ExternalLink className="w-12 h-12 text-muted-foreground" />
                      </div>
                    ) : (
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
                        
                        {/* Category initial */}
                        <span className="text-6xl font-display font-bold text-white/30 select-none">
                          {project.category.charAt(0)}
                        </span>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 right-3">
                          <span 
                            className="inline-block px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider rounded-lg text-white leading-tight"
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
                    )}

                    {/* Content - hidden on hover */}
                    <div 
                      className={cn(
                        "p-5 space-y-2 relative z-10 transition-all duration-300",
                        isHovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                      )}
                    >
                      <h3 className="text-lg font-display font-semibold text-foreground tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Hover Overlay - Shows View Project with Name */}
                    <div 
                      className={cn(
                        "absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center justify-center gap-2",
                        "transition-all duration-300 ease-out",
                        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{
                        background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.8) 70%, transparent 100%)',
                      }}
                    >
                      <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                        {project.isViewAll ? "Explore All" : "View Project"}
                      </span>
                      <span className="text-foreground font-display font-semibold text-base">
                        {project.title}
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