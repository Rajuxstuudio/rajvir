import { useState } from "react";
import { cn } from "@/lib/utils";

export const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      className="group relative flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Spline-style Icon */}
      <div className="relative w-10 h-10 perspective-1000">
        <div
          className={cn(
            "absolute inset-0 rounded-xl transition-all duration-500 preserve-3d",
            isHovered ? "rotate-y-12" : ""
          )}
          style={{
            transform: isHovered 
              ? "rotateY(15deg) rotateX(-10deg)" 
              : "rotateY(0deg) rotateX(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Base layer with gradient */}
          <div 
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 animate-pulse-glow"
            style={{ 
              transform: "translateZ(0px)",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(217, 70, 239, 0.2)"
            }}
          />
          
          {/* Middle layer */}
          <div 
            className="absolute inset-1 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
            style={{ 
              transform: "translateZ(4px)",
            }}
          />
          
          {/* Top layer with letter */}
          <div 
            className="absolute inset-2 rounded-md bg-gradient-to-br from-rose-400 via-pink-500 to-violet-500 flex items-center justify-center"
            style={{ 
              transform: "translateZ(8px)",
              boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.3)"
            }}
          >
            <span 
              className="text-white font-display font-bold text-lg drop-shadow-lg"
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.5)"
              }}
            >
              R
            </span>
          </div>

          {/* Floating orbs */}
          <div 
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-float"
            style={{ 
              transform: "translateZ(12px)",
              animationDelay: "0s"
            }}
          />
          <div 
            className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-float"
            style={{ 
              transform: "translateZ(10px)",
              animationDelay: "0.5s"
            }}
          />
        </div>
      </div>

      {/* Animated Glass Name */}
      <div className="relative overflow-hidden">
        <div 
          className="flex px-3 py-1 rounded-lg backdrop-blur-md transition-all duration-500"
          style={{
            background: isHovered 
              ? "rgba(255, 255, 255, 0.15)" 
              : "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: isHovered 
              ? "0 8px 32px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)" 
              : "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          {"Rajvir".split("").map((letter, index) => (
            <span
              key={index}
              className={cn(
                "font-display text-xl lg:text-2xl font-bold transition-all duration-300",
                "animate-fade-in-up"
              )}
              style={{
                animationDelay: `${index * 0.1}s`,
                background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
                filter: isHovered ? "brightness(1.3) drop-shadow(0 0 8px rgba(255,255,255,0.5))" : "brightness(1)",
                transform: isHovered 
                  ? `translateY(-2px) scale(1.05)` 
                  : "translateY(0) scale(1)",
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        
        {/* Glass shine effect */}
        <div 
          className={cn(
            "absolute top-0 left-0 w-full h-1/2 rounded-t-lg transition-all duration-500 pointer-events-none",
            isHovered ? "opacity-40" : "opacity-20"
          )}
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Glass sparkle effects on hover */}
      {isHovered && (
        <>
          <div 
            className="absolute -top-2 left-4 w-2 h-2 rounded-full animate-ping" 
            style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 0 10px rgba(255,255,255,0.6)" }}
          />
          <div 
            className="absolute top-1 right-0 w-1.5 h-1.5 rounded-full animate-ping" 
            style={{ background: "rgba(255,255,255,0.7)", boxShadow: "0 0 8px rgba(255,255,255,0.5)", animationDelay: "0.2s" }}
          />
          <div 
            className="absolute -bottom-1 left-8 w-1 h-1 rounded-full animate-ping" 
            style={{ background: "rgba(255,255,255,0.6)", boxShadow: "0 0 6px rgba(255,255,255,0.4)", animationDelay: "0.4s" }}
          />
        </>
      )}
    </a>
  );
};
