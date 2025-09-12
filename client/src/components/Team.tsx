import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sharon",
    role: "CEO – Abuja",
    image: "/images/download.jpg", // Replace with real URL
  },
  {
    name: "Tega",
    role: "CEO – Benin",
    image: "/images/CEO 2.jpg", // Replace with real URL
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 lg:py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet the Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The visionary women behind our brand — passionate about curating heartfelt gifts across Nigeria.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-card-border hover-elevate transition-all duration-300"
                data-testid={`card-founder-${index}`}
              >
                <CardContent className="p-6 lg:p-8 text-center flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-80 h-80 rounded-full object-cover mb-6 shadow-md"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Optional CTA */}
          <div className="text-center mt-12">
            <Card className="bg-card border-card-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Passionate About Gifting
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sharon and Tega built this brand to help you express love and appreciation through thoughtful bundles that leave lasting memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
