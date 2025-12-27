import { useEffect, useState, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Add ripple effect on click
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Animation loop for smooth cursor movement
    const animate = () => {
      // Smooth interpolation for main cursor
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;
      
      // Slower interpolation for trail
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.08;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }
      
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    
    const animationId = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Trail cursor */}
      <div
        ref={cursorTrailRef}
        className={`fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovering ? "w-16 h-16" : "w-10 h-10"
        } ${isClicking ? "scale-75" : "scale-100"}`}
        style={{
          background: "conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff, #5f27cd, #ff6b6b)",
          borderRadius: "50%",
          opacity: 0.3,
          filter: "blur(8px)",
        }}
      />

      {/* Main cursor - switches between dot and dotted circles on click */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isHovering ? "w-6 h-6" : "w-4 h-4"
        }`}
        style={{
          background: isClicking ? "transparent" : "conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff, #5f27cd, #ff6b6b)",
          borderRadius: "50%",
          boxShadow: isClicking ? "none" : "0 0 20px rgba(255, 107, 107, 0.5), 0 0 40px rgba(72, 219, 251, 0.3)",
        }}
      >
        {/* Inner glow - hidden when clicking */}
        {!isClicking && (
          <div
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              background: "conic-gradient(from 180deg, transparent, rgba(255,255,255,0.8), transparent)",
              animationDuration: "2s",
            }}
          />
        )}
        
        {/* Dotted circles on click */}
        {isClicking && (
          <>
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-8 h-8 rounded-full animate-spin"
              style={{
                border: "2px dashed #ff6b6b",
                animationDuration: "1s",
              }}
            />
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-14 h-14 rounded-full animate-spin"
              style={{
                border: "2px dashed #48dbfb",
                animationDuration: "1.5s",
                animationDirection: "reverse",
              }}
            />
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-20 h-20 rounded-full animate-spin"
              style={{
                border: "2px dashed #ff9ff3",
                animationDuration: "2s",
              }}
            />
          </>
        )}
      </div>

      {/* Click ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 animate-cursor-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid",
            borderImage: "conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff, #5f27cd, #ff6b6b) 1",
          }}
        />
      ))}

      {/* Sparkle particles on hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9996] -translate-x-1/2 -translate-y-1/2"
          style={{
            left: cursorPos.current.x,
            top: cursorPos.current.y,
          }}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-sparkle"
              style={{
                background: ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3"][i],
                animationDelay: `${i * 0.1}s`,
                transform: `rotate(${i * 90}deg) translateX(20px)`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};
