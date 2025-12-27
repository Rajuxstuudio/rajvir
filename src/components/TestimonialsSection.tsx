import { Star } from "lucide-react";

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

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Speech bubble */}
              <div className="relative w-full">
                <div className="bg-card rounded-3xl p-8 text-center transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <p className="text-foreground text-lg leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </p>
                </div>
                {/* Speech bubble pointer */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-card rotate-45 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
              </div>

              {/* Avatar */}
              <div className="mt-8 mb-4 relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 flex items-center justify-center text-foreground font-display font-bold text-2xl ring-4 ring-background shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {testimonial.author.charAt(0)}
                </div>
              </div>

              {/* Author info */}
              <div className="text-center">
                <h4 className="font-display font-semibold text-foreground text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
                <p className="text-muted-foreground/60 text-xs">
                  {testimonial.company}
                </p>
                <p className="text-muted-foreground/40 text-xs mt-1">
                  {testimonial.date}
                </p>

                {/* Star rating */}
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
