import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Rajvir's exceptional label and logo design skills, highlighting innovative, user-focused approaches enhanced our product presentation significantly.",
    author: "John D.",
    role: "Customer",
    date: "April 2025",
    rating: 4.9,
  },
  {
    quote: "Raj Vir's mentoring was invaluable. His clear breakdown of complex UX concepts and consistent availability made learning effortless.",
    author: "Rupa Mothukuri",
    role: "UX Designer at Solveda",
    date: "Feb 2025",
    rating: 4.9,
  },
  {
    quote: "Rajvir is a UX treasure trove. His rapid insight into UX flows was critical to our product goals and user satisfaction.",
    author: "Syed Asim",
    role: "SaaS & Robotics",
    date: "Feb 2022",
    rating: 4.9,
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate position on vertical semi-circle arc
  const getPosition = (index: number, total: number) => {
    // Offset index based on active to keep active in center
    const offset = index - activeIndex;
    const normalizedOffset = ((offset % total) + total) % total;
    const adjustedOffset = normalizedOffset > total / 2 ? normalizedOffset - total : normalizedOffset;
    
    // Arc angle (spread items across vertical arc)
    const angleSpread = 45; // degrees per item
    const angle = adjustedOffset * angleSpread;
    const angleRad = (angle * Math.PI) / 180;
    
    // Semi-circle radius
    const radius = 100;
    
    // Calculate x,y on vertical arc (arc curves to the right, items move vertically)
    const x = Math.sin(Math.abs(angleRad)) * radius * 0.3;
    const y = Math.sin(angleRad) * radius;
    
    return { x, y, angle: adjustedOffset };
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            Results that speaks volume
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find out how our happy clients are raving about us.
          </p>
        </div>

        {/* Testimonials Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-5xl mx-auto">
          {/* Left side - Semi-circle rotating carousel */}
          <div className="relative w-64 h-72 flex items-center justify-center">
            {/* Curved connecting line - vertical */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="-130 -140 260 280"
              fill="none"
            >
              <path
                d="M 30 -100 
                   Q 50 0 30 100"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              />
            </svg>

            {testimonials.map((testimonial, index) => {
              const { x, y, angle } = getPosition(index, testimonials.length);
              const isActive = index === activeIndex;
              const absAngle = Math.abs(angle);

              return (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    zIndex: isActive ? 10 : 5 - absAngle,
                  }}
                  onClick={() => handleClick(index)}
                >
                  {/* Avatar container */}
                  <div
                    className={`relative transition-all duration-500 ${
                      isActive
                        ? "scale-100"
                        : "scale-75 opacity-60"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`rounded-full transition-all duration-500 flex items-center justify-center font-display font-bold ${
                        isActive
                          ? "w-16 h-16 ring-2 ring-accent ring-offset-2 ring-offset-background bg-gradient-accent text-accent-foreground text-xl"
                          : "w-12 h-12 bg-muted text-muted-foreground text-sm"
                      }`}
                    >
                      {testimonial.author.charAt(0)}
                    </div>

                    {/* Name and rating - only show for active */}
                    <div
                      className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-500 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4 pointer-events-none"
                      }`}
                    >
                      <div className="font-display font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-accent font-medium">{testimonial.rating}</span>
                        <span className="text-muted-foreground text-xs">on {testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Quote */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Quote className="w-10 h-10 text-accent/40 mb-6" />
              
              <div className="relative min-h-[120px]">
                {testimonials.map((testimonial, index) => (
                  <p
                    key={index}
                    className={`text-xl md:text-2xl leading-relaxed text-foreground/90 font-light italic transition-all duration-500 absolute inset-0 ${
                      index === activeIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    {testimonial.quote}
                  </p>
                ))}
              </div>

              {/* Role */}
              <div className="mt-8 text-muted-foreground transition-all duration-500">
                — {testimonials[activeIndex].role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
