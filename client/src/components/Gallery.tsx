import { Card, CardContent } from "@/components/ui/card";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Gallery() {
  // Note: This structure is ready for real photos to be added by the client
  // todo: remove mock functionality - replace with actual work photos from The HOT Bundle
  const placeholderItems: GalleryItem[] = [
    {
      id: "1",
      title: "Premium Gift Experience",
      description: "Exquisite luxury bundles designed for truly unforgettable moments.",
      imageUrl: "/images/IMG_9696.PNG"
    },
    {
      id: "2", 
      title: "Anniversary Special",
      description: "Romantic anniversary bundle with personalized touches",
      imageUrl: "/images/IMG_9697.PNG"
    },
    {
      id: "3",
      title: "Proposal Package",
      description: "Curated for the perfect 'Yes!' — elegant, intimate, and unforgettable.",
      imageUrl: "/images/IMG_9698.PNG"
    },
    {
      id: "4",
      title: "Event Styling & Decor",
      description: "Transform your special moments with bespoke event organization and decoration.",
      imageUrl: "/images/IMG_9699.PNG"
    },
    {
      id: "5",
      title: "Surprise Drop-Offs",
      description: "Magical surprise moments — we deliver love, laughter, and the unexpected.",
      imageUrl: "/images/IMG_9701.PNG"
    },
    {
      id: "6",
      title: "Outdoor Decor & Events",
      description: "From intimate picnics to lavish setups — curated outdoor experiences that wow.",
      imageUrl: "/images/IMG_9700.PNG"
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take a look at some of our beautifully curated gift bundles that have brought 
              joy to our clients across Abuja and Benin.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {placeholderItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover-elevate transition-all duration-300 overflow-hidden border-card-border"
                data-testid={`card-gallery-item-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Want to see more of our work or create a custom bundle?
            </p>
            <button
              onClick={() => {
                console.log('View more gallery items clicked');
                const contactFormSection = document.getElementById('contact-form');
                if (contactFormSection) {
                  contactFormSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-primary hover:text-primary/80 font-semibold underline hover-elevate px-2 py-1 rounded"
              data-testid="button-gallery-contact"
            >
              Get in touch to see more examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}