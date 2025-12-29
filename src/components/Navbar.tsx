import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "./AnimatedLogo";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useNavigate } from "react-router-dom";
import profileAvatar from "@/assets/profile-avatar.png";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/raj._.ux?igsh=MW13ZXYyZnJ4ejRxMA==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rajveer11/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/918005883696", label: "WhatsApp" },
  { icon: Mail, href: "mailto:rajuxstudio@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // Navigate to home first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "py-4" : "py-4")}>
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
            isScrolled ? "glass" : "bg-transparent",
          )}
        >
          {/* Logo */}
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Profile Avatar with Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <div
              className={cn(
                "flex items-center gap-2 overflow-hidden transition-all duration-300",
                isProfileExpanded ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0",
              )}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsProfileExpanded(!isProfileExpanded)}
              className="relative w-11 h-11 rounded-xl bg-card border border-border overflow-hidden flex items-center justify-center hover:border-primary/30 transition-all duration-300"
            >
              <img src={profileAvatar} alt="Profile" className="h-10 w-auto object-contain" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
                <button
                  key={link.label}
                  onClick={() => {
                    handleNavClick(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium text-foreground py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              {/* Theme Toggle & Profile with Social Links - Always Expanded on Mobile */}
              <div className="flex items-center gap-2 mt-4">
                <ThemeToggle />
                <div className="relative w-12 h-12 rounded-xl bg-card border border-border overflow-hidden flex items-center justify-center">
                  <img src={profileAvatar} alt="Profile" className="h-11 w-auto object-contain" />
                </div>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-muted transition-all duration-300"
                    aria-label={social.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
