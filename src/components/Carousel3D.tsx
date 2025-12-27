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
  const radius = 380;

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
              const opacity = isBackSide ? 0.4 : 1;
              const scale = isBackSide ? 0.85 : 1;
              
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
                    transition: isDragging ? 'opacity 0.2s' : 'opacity 0.5s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
                      isHovered && isActive && "scale-105"
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

                    {/* Project Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-700",
                          isHovered && isActive && "scale-110"
                        )}
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span 
                          className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full text-white"
                          style={{
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2 relative z-10">
                      <h3 className="text-lg font-display font-semibold text-white tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div 
                      className={cn(
                        "absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl",
                        "transition-opacity duration-400 ease-out",
                        isHovered && isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                      )}
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.9) 0%, hsl(var(--primary) / 0.7) 100%)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                        }}
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-display font-semibold text-lg">
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
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className={cn(
            "group p-4 rounded-full",
            "transition-all duration-300",
            "hover:scale-110 active:scale-95"
          )}
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        </button>

        {/* Progress Indicators */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setRotation(-index * anglePerItem)}
              className={cn(
                "h-2 rounded-full transition-all duration-500 ease-out",
                index === activeIndex 
                  ? "w-8 bg-primary shadow-lg shadow-primary/50" 
                  : "w-2 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className={cn(
            "group p-4 rounded-full",
            "transition-all duration-300",
            "hover:scale-110 active:scale-95"
          )}
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
};