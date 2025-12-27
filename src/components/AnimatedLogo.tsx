import { cn } from "@/lib/utils";

export const AnimatedLogo = () => {
  return (
    <a
      href="#"
      className="group relative flex items-center"
    >
      {/* Animated Handwritten Name with Writing Effect */}
      <div className="relative">
        <span
          className={cn(
            "font-handwritten text-2xl lg:text-3xl font-bold text-white block",
            "animate-write-text"
          )}
          style={{
            textShadow: `0 0 20px rgba(168, 85, 247, 0.8),
                   0 0 40px rgba(168, 85, 247, 0.5),
                   2px 2px 0px rgba(139, 92, 246, 0.8),
                   3px 3px 0px rgba(124, 58, 237, 0.6),
                   4px 4px 8px rgba(0, 0, 0, 0.4)`
          }}
        >
          Rajvir
        </span>
        
        {/* Animated pen/cursor effect */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-0.5 h-5 bg-gradient-to-b from-violet-400 to-fuchsia-500 animate-write-cursor rounded-full"
          style={{
            boxShadow: "0 0 8px rgba(168, 85, 247, 0.8)"
          }}
        />

        {/* Floating bubbles/orbs around the text */}
        <div 
          className="absolute -top-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="absolute -top-1 right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div 
          className="absolute -bottom-1 left-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div 
          className="absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div 
          className="absolute -bottom-2 right-6 w-1 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </a>
  );
};
