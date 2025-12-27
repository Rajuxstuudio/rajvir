const tools = [
  {
    name: "Figma",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
  },
  {
    name: "Framer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2.5 12h2l3 9.5M12 22l3-9.5M18.5 7l-3 9.5" />
        <path d="M8.5 7l-2 6.5L12 7l3 6.5L19 7" />
      </svg>
    ),
  },
  {
    name: "Angular",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <path d="M12 2L3 6l1.5 12L12 22l7.5-4L21 6l-9-4z" />
        <path d="M12 6v10M8 14h8" />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <path d="M8 17s-1.5.5-1.5 1.5.5 1.5 1.5 1.5 2.5-1 2.5-2.5S8 15 8 14s1.5-2 3-2 2.5 1 2.5 2-.5 2-2 2.5" />
        <path d="M6 11s2-1 6-1 6 1 6 1" />
        <path d="M6 7s2-1 6-1 6 1 6 1" />
        <path d="M9 3c0 1 3 2 3 4" />
      </svg>
    ),
  },
  {
    name: "Notion",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h4l4 6-4 6H8l4-6-4-6z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.1 0 2.1-.4 2.8-1.2" />
        <circle cx="14" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 15V9h2.5a2 2 0 0 1 0 4H7" />
        <path d="M14 15v-2.5a2.5 2.5 0 0 1 5 0" />
      </svg>
    ),
  },
  {
    name: "Jira",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <path d="M12 2L2 12l10 10 10-10L12 2z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
];
export const ToolsStrip = () => {
  // Duplicate tools for seamless loop
  const duplicatedTools = [...tools, ...tools];
  return (
    <div className="w-full mt-16 lg:mt-12 animate-fade-in-up animation-delay-500 my-[48px]">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-6 lg:mb-8">
        Tools I Work With
      </p>

      {/* Carousel container with mask */}
      <div className="relative overflow-hidden">
        {/* Gradient masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-scroll-left">
          {duplicatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 px-6 lg:px-10 group"
            >
              <div className="text-muted-foreground/50 group-hover:text-primary transition-colors duration-300">
                {tool.icon}
              </div>
              <span className="text-[10px] lg:text-xs uppercase tracking-wider text-muted-foreground/40 group-hover:text-muted-foreground transition-colors duration-300 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
