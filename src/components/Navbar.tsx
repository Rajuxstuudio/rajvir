import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "./AnimatedLogo";
import profileAvatar from "@/assets/profile-avatar.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
            isScrolled ? "glass" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Profile Avatar */}
          <div className="hidden md:block">
            <div className="relative w-11 h-11 rounded-md bg-secondary shadow-md overflow-hidden flex items-center justify-center">
              <img 
                src={profileAvatar} 
                alt="Profile"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl glass p-6 animate-scale-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="relative w-12 h-12 rounded-md bg-secondary shadow-md overflow-hidden flex items-center justify-center mt-4">
                <img 
                  src={profileAvatar} 
                  alt="Profile"
                  className="h-11 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
