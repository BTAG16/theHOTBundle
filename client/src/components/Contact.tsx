import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+2349039525262", "+2349066890560"],
      href: "tel:+2349039525262"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["thehotbundle@gmail.com"],
      href: "mailto:thehotbundle@gmail.com"
    },
    {
      icon: MapPin,
      title: "Locations",
      details: ["Abuja, Nigeria", "Benin, Nigeria"],
      href: null
    }
  ];

  const handleContactClick = (href: string | null) => {
    if (href) {
      window.open(href, '_self');
      console.log(`Contact clicked: ${href}`);
    }
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/thehotbundle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
    console.log('Instagram link clicked');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to create the perfect gift bundle? Contact us today and let's make 
              your gifting experience truly extraordinary.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className={`hover-elevate transition-all duration-300 border-card-border ${
                  contact.href ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleContactClick(contact.href)}
                data-testid={`card-contact-${contact.title.toLowerCase().replace(' ', '-')}`}
              >
                <CardHeader className="text-center pb-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Instagram Social Link */}
          <div className="text-center">
            <Card className="inline-block hover-elevate transition-all duration-300 border-card-border">
              <CardContent className="p-6">
                <button 
                  onClick={handleInstagramClick}
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                  data-testid="button-instagram"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Follow Us on Instagram</h3>
                    <p className="text-sm text-muted-foreground">@thehotbundle</p>
                  </div>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}