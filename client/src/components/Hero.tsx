import { Button } from "@/components/ui/button";
const heroImage = "/images/Main_1757705167367.jpg";

interface HeroProps {
  onGetStarted?: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
    onGetStarted?.();
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury gift bundle" 
          className="w-full h-full object-cover"
        />
        {/* Dark wash gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Luxury Gifting,{" "}
            <span className="text-primary">Redefined.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium gift bundles for every occasion, available in Abuja & Benin.
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleGetStarted}
            className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            data-testid="button-get-started"
          >
            Get Started
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}