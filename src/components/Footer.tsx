import { Heart } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>© 2025 Rajvir. Made with</span>
            <Heart className="w-3 h-3 text-primary fill-primary animate-heartbeat" />
            <span>in India</span>
          </div>

          {/* Resume link */}
          <a
            href="https://drive.google.com/file/d/1HtAW7Grsp5yHEIstNiU7uHrGJe699qy3/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            View Resume →
          </a>
        </div>
      </div>
    </footer>
  );
};
