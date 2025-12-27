import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
