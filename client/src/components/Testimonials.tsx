import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  occasion: string;
}

export default function Testimonials() {
  // Note: This structure is ready for real testimonials to be added by the client
  // todo: remove mock functionality - replace with actual customer testimonials
  const placeholderTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Adebayo O.",
      location: "Abuja",
      rating: 5,
      text: "The HOT Bundle made my wife's birthday incredibly special. The attention to detail and quality of items was outstanding. Highly recommend!",
      occasion: "Birthday Gift"
    },
    {
      id: "2", 
      name: "Grace M.",
      location: "Benin City",
      rating: 5,
      text: "Professional service and beautiful packaging. They helped me create the perfect corporate gifts for our clients. Will definitely use again.",
      occasion: "Corporate Gifts"
    },
    {
      id: "3",
      name: "Ibrahim K.",
      location: "Abuja",
      rating: 5,
      text: "Amazing anniversary bundle! Everything was perfectly curated and the delivery was seamless. My partner was absolutely thrilled.",
      occasion: "Anniversary"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-primary fill-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers 
              across Abuja and Benin have to say about their experience with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {placeholderTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className="hover-elevate transition-all duration-300 border-card-border bg-card"
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-6 lg:p-8">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">
                          {testimonial.occasion}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-card border-card-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Create Your Own Success Story?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join our satisfied customers and let us help you create memorable 
                  gifting experiences that will be cherished forever.
                </p>
                <button
                  onClick={() => {
                    console.log('Start your gifting journey clicked');
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover-elevate transition-all duration-300"
                  data-testid="button-testimonials-cta"
                >
                  Start Your Gifting Journey
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}