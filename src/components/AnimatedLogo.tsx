import { useState } from "react";
import { cn } from "@/lib/utils";

export const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      className="group relative flex flex-col items-center gap-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Spline-style Icon */}
      <div className="relative w-8 h-8 perspective-1000">
        <div
          className={cn(
            "absolute inset-0 rounded-lg transition-all duration-500 preserve-3d"
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
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 animate-pulse-glow"
            style={{ 
              transform: "translateZ(0px)",
              boxShadow: "0 0 15px rgba(168, 85, 247, 0.4), 0 0 30px rgba(217, 70, 239, 0.2)"
            }}
          />
          
          {/* Middle layer */}
          <div 
            className="absolute inset-0.5 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
            style={{ 
              transform: "translateZ(3px)",
            }}
          />
          
          {/* Top layer with letter */}
          <div 
            className="absolute inset-1.5 rounded-sm bg-gradient-to-br from-rose-400 via-pink-500 to-violet-500 flex items-center justify-center"
            style={{ 
              transform: "translateZ(6px)",
              boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.3)"
            }}
          >
            <span 
              className="text-white font-display font-bold text-xs drop-shadow-lg"
              style={{
                textShadow: "0 1px 3px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.5)"
              }}
            >
              R
            </span>
          </div>

          {/* Floating orbs */}
          <div 
            className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-float"
            style={{ 
              transform: "translateZ(10px)",
              animationDelay: "0s"
            }}
          />
          <div 
            className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-float"
            style={{ 
              transform: "translateZ(8px)",
              animationDelay: "0.5s"
            }}
          />
        </div>
      </div>

      {/* Animated Handwritten Name with Writing Effect */}
      <div className="relative overflow-hidden mt-0.5">
        <div className="relative">
          <span
            className={cn(
              "font-handwritten text-xl lg:text-2xl font-bold text-white block",
              "animate-write-text"
            )}
            style={{
              textShadow: isHovered 
                ? "0 0 20px rgba(255,255,255,0.6), 0 2px 10px rgba(168, 85, 247, 0.5)" 
                : "0 2px 10px rgba(255,255,255,0.3)",
              transition: "text-shadow 0.3s ease"
            }}
          >
            Rajvir
          </span>
          
          {/* Animated pen/cursor effect */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gradient-to-b from-violet-400 to-fuchsia-500 animate-write-cursor rounded-full"
            style={{
              boxShadow: "0 0 8px rgba(168, 85, 247, 0.8)"
            }}
          />
        </div>
      </div>

      {/* Sparkle effects on hover */}
      {isHovered && (
        <>
          <div className="absolute -top-1 left-2 w-1 h-1 rounded-full bg-yellow-400 animate-ping" />
          <div className="absolute top-2 right-0 w-0.5 h-0.5 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: "0.2s" }} />
          <div className="absolute bottom-0 left-6 w-0.5 h-0.5 rounded-full bg-pink-400 animate-ping" style={{ animationDelay: "0.4s" }} />
        </>
      )}
    </a>
  );
};
