import { Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote: "Rajvir's exceptional label and logo design skills, highlighting innovative, user-focused approaches enhanced our product presentation significantly.",
    author: "John D.",
    role: "Customer",
    date: "April 2025",
    stat: "8X",
    statLabel: "Increase in conversion rate",
  },
  {
    quote: "Raj Vir's mentoring was invaluable. His clear breakdown of complex UX concepts and consistent availability made learning effortless.",
    author: "Rupa Mothukuri",
    role: "UX Designer at Solveda",
    date: "Feb 2025",
    stat: "2X",
    statLabel: "Increase in lead generation",
  },
  {
    quote: "Rajvir is a UX treasure trove. His rapid insight into UX flows was critical to our product goals and user satisfaction.",
    author: "Syed Asim",
    role: "SaaS & Robotics",
    date: "Feb 2022",
    stat: null,
    statLabel: null,
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            Results that speaks volume
          </h2>
          <h3 className="text-2xl md:text-3xl font-display text-muted-foreground mb-4">
            Read success stories
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find out how our happy clients are raving about us.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Large Left Card */}
          <div
            className="md:col-span-5 row-span-2 p-8 rounded-3xl glass border border-border/30 animate-fade-in-up flex flex-col justify-between"
            style={{ animationDelay: "0ms" }}
          >
            {/* Stat */}
            <div>
              <div className="text-6xl md:text-7xl font-display font-bold text-foreground mb-2">
                {testimonials[0].stat}
              </div>
              <div className="text-lg text-muted-foreground mb-8">
                {testimonials[0].statLabel}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-accent/60 mb-4 rotate-180" />
              <p className="text-foreground/90 leading-relaxed text-lg">
                "{testimonials[0].quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-display font-bold">
                {testimonials[0].author.charAt(0)}
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">
                  {testimonials[0].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[0].role}
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Card with Stat */}
          <div
            className="md:col-span-7 p-6 rounded-3xl glass border border-border/30 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl font-display font-bold text-foreground">
                {testimonials[1].stat}
              </div>
              <div className="text-muted-foreground">
                {testimonials[1].statLabel}
              </div>
            </div>

            <Quote className="w-6 h-6 text-accent/60 mb-3 rotate-180" />
            <p className="text-foreground/80 leading-relaxed mb-6">
              "{testimonials[1].quote}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-display font-bold text-sm">
                {testimonials[1].author.charAt(0)}
              </div>
              <div>
                <div className="font-display font-semibold text-foreground text-sm">
                  {testimonials[1].author}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonials[1].role}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Two cards side by side */}
          <div className="md:col-span-7 grid md:grid-cols-2 gap-6">
            {/* Third Testimonial */}
            <div
              className="p-6 rounded-3xl glass border border-border/30 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Quote className="w-6 h-6 text-accent/60 mb-3 rotate-180" />
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                "{testimonials[2].quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-display font-bold text-sm">
                  {testimonials[2].author.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-sm">
                    {testimonials[2].author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[2].role}
                  </div>
                </div>
              </div>
            </div>

            {/* View All Card - Dark themed */}
            <div
              className="p-6 rounded-3xl bg-card/90 border border-border/50 animate-fade-in-up flex flex-col justify-between backdrop-blur-xl"
              style={{ animationDelay: "300ms" }}
            >
              <div>
                <Quote className="w-6 h-6 text-accent mb-3 rotate-180" />
                <p className="text-foreground/70 leading-relaxed text-sm mb-4">
                  "More success stories from clients who trusted us with their vision."
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
