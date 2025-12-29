import { Heart } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";
export const Footer = () => {
  return <footer className="py-12 border-t border-border/50 lg:py-[24px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <AnimatedLogo />

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Rajvir Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
            <span>in India</span>
          </div>

          {/* Resume link */}
          <a href="https://drive.google.com/file/d/1HtAW7Grsp5yHEIstNiU7uHrGJe699qy3/view" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View Resume →
          </a>
        </div>
      </div>
    </footer>;
};