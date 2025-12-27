import { FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="font-display text-xl font-bold">
            <span className="text-gradient">Rajvir</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            <p>© Rajvir Portfolio 2025. All rights reserved.</p>
            <p className="text-xs mt-1 text-muted-foreground/60">Site created with Framer</p>
          </div>

          {/* Resume link */}
          <a
            href="https://drive.google.com/file/d/1HtAW7Grsp5yHEIstNiU7uHrGJe699qy3/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
