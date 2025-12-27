import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Amrutam Ayurveda",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "E-Commerce App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Identity Design",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "SaaS Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Analytics Widget",
    category: "Dashboard Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Mobile Banking",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Logo Collection",
    category: "Identity Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
  },
];

export const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer",
              "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedImage(item)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className={cn(
                "w-full h-full object-cover transition-transform duration-500",
                hoveredId === item.id && "scale-110"
              )}
            />

            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
                "flex flex-col justify-end p-4 transition-opacity duration-300",
                hoveredId === item.id ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="text-xs text-primary font-medium mb-1">
                {item.category}
              </span>
              <h3 className="text-white font-display font-semibold text-sm">
                {item.title}
              </h3>
              
              {/* View icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Border glow on hover */}
            <div
              className={cn(
                "absolute inset-0 rounded-xl border-2 transition-opacity duration-300",
                hoveredId === item.id ? "border-primary/50 opacity-100" : "border-transparent opacity-0"
              )}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg animate-scale-in"
            />
            <div className="text-center mt-4">
              <span className="text-primary text-sm">{selectedImage.category}</span>
              <h3 className="text-white font-display font-semibold text-xl mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
