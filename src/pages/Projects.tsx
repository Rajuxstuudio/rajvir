import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Smartphone, Monitor } from "lucide-react";
import { 
  SiFigma, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiFirebase,
  SiFlutter,
  SiAdobexd,
  SiWordpress,
  SiFramer
} from "react-icons/si";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  link: string;
  tools: React.ReactNode[];
  hasMobile: boolean;
  hasWeb: boolean;
}

const googleColors = [
  "linear-gradient(135deg, #4285F4 0%, #2B5CBC 100%)",
  "linear-gradient(135deg, #EA4335 0%, #C5221F 100%)",
  "linear-gradient(135deg, #FBBC04 0%, #E8A400 100%)",
  "linear-gradient(135deg, #34A853 0%, #1E8E3E 100%)",
  "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
  "linear-gradient(135deg, #EA4335 0%, #FBBC04 100%)",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Utility Plus",
    category: "SaaS (Mobile/Tablet/Web Application)",
    description: "Help agencies manage billing, track records, and streamline user data efficiently. Improved the existing UX for better usability.",
    color: googleColors[0],
    link: "#",
    tools: [<SiFigma key="figma" />, <SiReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tw" />],
    hasMobile: true,
    hasWeb: true,
  },
  {
    id: 2,
    title: "CloudGavel",
    category: "SaaS (Mobile/Web Application)",
    description: "An innovative eWarrant solution that streamlines the warrant approval process, enabling law enforcement efficiency.",
    color: googleColors[1],
    link: "#",
    tools: [<SiFigma key="figma" />, <SiReact key="react" />, <SiNodedotjs key="node" />, <SiFirebase key="firebase" />],
    hasMobile: true,
    hasWeb: true,
  },
  {
    id: 3,
    title: "Echelon Constructors",
    category: "ERP (Web App)",
    description: "Construction Project Management Software designed to handle project planning, scheduling, and resource management.",
    color: googleColors[2],
    link: "#",
    tools: [<SiFigma key="figma" />, <SiReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tw" />],
    hasMobile: false,
    hasWeb: true,
  },
  {
    id: 4,
    title: "Captable",
    category: "Fintech (Web App)",
    description: "Help agencies manage billing, track records, and streamline user data efficiently. Improved the existing UX.",
    color: googleColors[3],
    link: "#",
    tools: [<SiAdobexd key="xd" />, <SiReact key="react" />, <SiTypescript key="ts" />],
    hasMobile: false,
    hasWeb: true,
  },
  {
    id: 5,
    title: "Bumper Mandi",
    category: "AgriTech (Mobile/Web Application)",
    description: "A digital mandi app that helps farmers sell grain securely and transparently. Simplifies transactions, ensures fair pricing, verified buyers, and real-time updates.",
    color: googleColors[4],
    link: "#",
    tools: [<SiFigma key="figma" />, <SiFlutter key="flutter" />, <SiFirebase key="firebase" />],
    hasMobile: true,
    hasWeb: true,
  },
  {
    id: 6,
    title: "React Portfolio Website",
    category: "Web Development",
    description: "A modern, responsive portfolio website using React with smooth navigation, reusable components, and a clean UI. Maintained on GitHub with organized commits and clear documentation.",
    color: googleColors[5],
    link: "#",
    tools: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tw" />, <SiFramer key="framer" />],
    hasMobile: true,
    hasWeb: true,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              Projects
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A complete collection of my design and development work across various industries and platforms.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Logo/Color Header */}
                <div 
                  className={`relative overflow-hidden flex items-center justify-center ${
                    index === 0 ? "h-64" : "h-44"
                  }`}
                  style={{ background: project.color }}
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/30 rounded-lg rotate-45" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full" />
                  </div>

                  {/* Project Initial as Logo placeholder */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <span className={`font-display font-bold text-white/90 select-none ${
                      index === 0 ? "text-8xl" : "text-6xl"
                    }`}>
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="inline-block px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-lg text-white"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Device Mockup Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.hasMobile && (
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {project.hasWeb && (
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Monitor className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* View Project Overlay */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2 text-white font-medium">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className={`p-6 ${index === 0 ? "space-y-4" : "space-y-3"}`}>
                  {/* Project Name */}
                  <h3 className={`font-display font-bold text-foreground ${
                    index === 0 ? "text-2xl" : "text-lg"
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-muted-foreground leading-relaxed ${
                    index === 0 ? "text-base" : "text-sm line-clamp-3"
                  }`}>
                    {project.description}
                  </p>

                  {/* Tools Row */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Tools:</span>
                    <div className="flex items-center gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <div 
                          key={toolIndex}
                          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          <span className="text-lg">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
