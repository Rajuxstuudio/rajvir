import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop for ultra-smooth cursor movement
    let animationId: number;
    const animate = () => {
      // Higher interpolation factor for smoother, faster response
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationId = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        willChange: "left, top",
        transform: "translate(-2px, -2px)",
      }}
    >
      {/* 3D Arrow cursor with animated gradient */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.4)) drop-shadow(0 0 8px rgba(255,107,107,0.3))",
        }}
      >
        <defs>
          {/* Animated gradient */}
          <linearGradient id="cursorGradientAnimated" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b">
              <animate attributeName="stop-color" values="#ff6b6b;#feca57;#48dbfb;#ff9ff3;#5f27cd;#ff6b6b" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="33%" stopColor="#48dbfb">
              <animate attributeName="stop-color" values="#48dbfb;#ff9ff3;#5f27cd;#ff6b6b;#feca57;#48dbfb" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="66%" stopColor="#ff9ff3">
              <animate attributeName="stop-color" values="#ff9ff3;#5f27cd;#ff6b6b;#feca57;#48dbfb;#ff9ff3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#5f27cd">
              <animate attributeName="stop-color" values="#5f27cd;#ff6b6b;#feca57;#48dbfb;#ff9ff3;#5f27cd" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* 3D highlight gradient */}
          <linearGradient id="cursorHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
          
          {/* Shadow gradient for 3D depth */}
          <linearGradient id="cursorShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
          </linearGradient>
        </defs>
        
        {/* Shadow layer for 3D effect */}
        <path
          d="M6 5L22 13L14 15L12 21L6 5Z"
          fill="url(#cursorShadow)"
          transform="translate(1, 1)"
        />
        
        {/* Main cursor with animated gradient */}
        <path
          d="M4 3L22 12L13 14.5L10.5 22L4 3Z"
          fill="url(#cursorGradientAnimated)"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* 3D highlight overlay */}
        <path
          d="M4 3L22 12L13 14.5L10.5 22L4 3Z"
          fill="url(#cursorHighlight)"
          style={{ mixBlendMode: "overlay" }}
        />
        
        {/* Inner shine for extra 3D pop */}
        <path
          d="M6 6L16 11L11 12.5L9.5 17L6 6Z"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
    </div>
  );
};
