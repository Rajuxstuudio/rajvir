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
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-5xl mx-auto">
          {/* Left side - Rotating avatars with connecting line */}
          <div className="relative flex flex-col items-center">
            {/* Curved connecting line */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 h-full w-20 pointer-events-none"
              viewBox="0 0 80 300"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M40 0 Q60 75 40 150 Q20 225 40 300"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>

            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);

              return (
                <div
                  key={index}
                  className="relative z-10 flex items-center gap-4 cursor-pointer transition-all duration-500"
                  style={{
                    marginTop: index === 0 ? 0 : "2rem",
                    transform: isActive ? "scale(1)" : `scale(${1 - distance * 0.15})`,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  onClick={() => handleClick(index)}
                >
                  {/* Avatar */}
                  <div
                    className={`relative rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-16 h-16 ring-2 ring-accent ring-offset-2 ring-offset-background"
                        : "w-12 h-12"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-display font-bold ${
                        isActive ? "text-xl" : "text-sm"
                      }`}
                    >
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>

                  {/* Name and rating - only show for active */}
                  <div
                    className={`transition-all duration-500 ${
                      isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 absolute"
                    }`}
                  >
                    <div className="font-display font-semibold text-foreground whitespace-nowrap">
                      {testimonial.author}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-accent font-medium">{testimonial.rating}</span>
                      <span className="text-muted-foreground">on {testimonial.date}</span>
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
              <div
                className="mt-8 text-muted-foreground transition-all duration-500"
                key={activeIndex}
              >
                — {testimonials[activeIndex].role}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-accent w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
