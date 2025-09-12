import { Card, CardContent } from "@/components/ui/card";
import { Gift, Package, Truck } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: Gift,
      title: "Custom Bundles",
      description: "Personalized gift collections tailored to your recipient's preferences and the occasion."
    },
    {
      icon: Package,
      title: "Elegant Wrapping",
      description: "Premium packaging and presentation that makes every gift feel truly special."
    },
    {
      icon: Truck,
      title: "Delivery Options",
      description: "Reliable delivery services across Abuja and Benin to ensure your gifts arrive perfectly."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About The HOT Bundle
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in creating unforgettable gifting experiences through carefully curated bundles 
              that celebrate life's most precious moments. From intimate celebrations to grand occasions, 
              we make every gift extraordinary.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate border-card-border bg-card transition-all duration-300">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Content */}
          <div className="mt-12 lg:mt-16 text-center">
            <Card className="bg-card border-card-border">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Why Choose The HOT Bundle?
                </h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  With years of experience in luxury gifting, we understand that the perfect gift goes beyond 
                  the item itself. It's about creating moments of joy, surprise, and connection. Our expert team 
                  carefully selects each item, ensuring quality and elegance in every bundle we create.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}