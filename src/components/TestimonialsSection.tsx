import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Rajvir's exceptional label and logo design skills, highlighting innovative, user-focused approaches enhanced our product presentation significantly.",
    author: "John D.",
    role: "Customer",
    company: "Design Co.",
    date: "April 2025",
    rating: 5,
  },
  {
    quote: "Raj Vir's mentoring was invaluable. His clear breakdown of complex UX concepts and consistent availability made learning effortless.",
    author: "Rupa Mothukuri",
    role: "UX Designer",
    company: "Solveda",
    date: "Feb 2025",
    rating: 5,
  },
  {
    quote: "Rajvir is a UX treasure trove. His rapid insight into UX flows was critical to our product goals and user satisfaction.",
    author: "Syed Asim",
    role: "Product Lead",
    company: "SaaS & Robotics",
    date: "Feb 2022",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-4">
            Client Love
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Words from the amazing people I've had the pleasure to work with.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-8">
          {/* Prev button */}
          <button
            onClick={goToPrev}
            className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial card */}
          <div
            className="relative w-full max-w-md cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-col items-center animate-fade-in">
              {/* Avatar */}
              <div className="mb-6 relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-foreground font-display font-bold text-3xl ring-4 ring-background shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {testimonial.author.charAt(0)}
                </div>
              </div>

              {/* Author info */}
              <div className="text-center transition-all duration-500 group-hover:opacity-30 group-hover:blur-sm">
                <h4 className="font-display font-semibold text-foreground text-xl">
                  {testimonial.author}
                </h4>
                <p className="text-muted-foreground text-sm mt-1">
                  {testimonial.role}
                </p>
                <p className="text-muted-foreground/60 text-xs">
                  {testimonial.company}
                </p>
                <p className="text-muted-foreground/40 text-xs mt-1">
                  {testimonial.date}
                </p>

                {/* Star rating */}
                <div className="flex items-center justify-center gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>

              {/* Quote overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 mx-4 shadow-2xl border border-border/50 transform scale-95 group-hover:scale-100 transition-transform duration-500">
                  <p className="text-foreground text-lg leading-relaxed text-center font-medium">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-accent w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
